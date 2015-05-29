    // JavaScript source code
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
    ports.forEach(function (port) {
        console.log(port.comName);
    });
});

var portName = "COM6"
var receivedData_A = "";
var serialPortA = new SerialPort(portName, {
    baudrate: 115200,
    // defaults for Arduino serial communication
    dataBits: 8,
    buffersize: 1000,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

serialPortA.on("open", function () {
    console.log('open');

    serialPortA.on('data', function (data) {
        console.log('data received: ' + data);
        receivedData_A = data;
        //console.log('checking variable: ' + receivedData_A);
        });
});