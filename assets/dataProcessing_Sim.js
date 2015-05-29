window.onload = function () {

    //var serialport = require("serialport");
    //var SerialPort = serialport.SerialPort;

    ////Port A Collect Data
    //var portNameA = "ttyUSB0" // Change
    //var Data_A = "";
    //var titleA = "";
    //var xA = "";
    //var yA = "";
    //var dataA;
    //var serialPortA = new SerialPort(portNameA, {
    //    baudrate: 115200,
    //    // For Arduino serial communication, May need larger buffer size
    //    dataBits: 8,
    //    buffersize: 1000,
    //    parity: 'none',
    //    stopBits: 1,
    //    flowControl: false
    //});

    //serialPortA.on("open", function () {
    //    //console.log('open');

    //    serialPortA.on('data', function (data) {
    //        // console.log('data received: ' + data);
    //        Data_A = data;
    //        //console.log('checking variable: ' + receivedData_A);
    //    });
    //});


    ////Port B Collect Data
    //var portNameB = "ttyUSB1" // Change
    //var Data_B = "";
    //var titleB = "";
    //var xB = "";
    //var yB = "";
    //var dataB;

    //var serialPortB = new SerialPort(portNameB, {
    //    baudrate: 115200,
    //    // For Arduino serial communication, May need larger buffer size
    //    dataBits: 8,
    //    buffersize: 1000,
    //    parity: 'none',
    //    stopBits: 1,
    //    flowControl: false
    //});

    //serialPortB.on("open", function () {
    //    //console.log('open');

    //    serialPortB.on('data', function (data) {
    //        // console.log('data received: ' + data);
    //        Data_B = data;
    //        //console.log('checking variable: ' + receivedData_A);
    //    });
    //});

    ////Port C Collect Data
    //var portNameC = "ttyUSB2" // Change
    //var Data_C = "";
    //var titleC = "";
    //var xC = "";
    //var yC = "";
    //var dataC;

    //var serialPortC = new SerialPort(portNameC, {
    //    baudrate: 115200,
    //    // For Arduino serial communication, May need larger buffer size
    //    dataBits: 8,
    //    buffersize: 1000,
    //    parity: 'none',
    //    stopBits: 1,
    //    flowControl: false
    //});

    //serialPortC.on("open", function () {
    //    //console.log('open');

    //    serialPortC.on('data', function (data) {
    //        // console.log('data received: ' + data);
    //        Data_C = data;
    //        //console.log('checking variable: ' + receivedData_A);
    //    });
    //});

    ////Port D Collect Data
    //var portNameD = "ttyUSB3" // Change
    //var Data_D = "";
    //var titleD = "";
    //var xD = "";
    //var yD = "";
    //var dataD;

    //var serialPortD = new SerialPort(portNameD, {
    //    baudrate: 115200,
    //    // For Arduino serial communication, May need larger buffer size
    //    dataBits: 8,
    //    buffersize: 1000,
    //    parity: 'none',
    //    stopBits: 1,
    //    flowControl: false
    //});

    //serialPortD.on("open", function () {
    //    //console.log('open');

    //    serialPortD.on('data', function (data) {
    //        // console.log('data received: ' + data);
    //        Data_D = data;
    //        //console.log('checking variable: ' + receivedData_A);
    //    });
    //});

        
    //// Port A Formating 
    //if ((Data_A.slice(0, 2) == "000") && (Data_A.length>15)) {
    //    if (Data_A.slice(3, 7) == "375DA") {
    //        titleA = "Live Ethanol Reading";
    //        xA = "Time (Sec)";
    //        yA = "ppm";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //    if (Data_A.slice(3, 7) == "375EA") {
    //        titleA = "Live Methane Reading";
    //        xA = "Time (Sec)";
    //        yA = "ppm";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //    if (Data_A.slice(3, 7) == "3760A") {
    //        titleA = "Live Liquid Petroleum Reading";
    //        xA = "Time (Sec)";
    //        yA = "ppm";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //    if (Data_A.slice(3, 7) == "3761A") {
    //        titleA = "Live Carbon Monoxide Reading";
    //        xA = "Time (Sec)";
    //        yA = "ppm";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //    if (Data_A.slice(3, 7) == "3762A") {
    //        titleA = "Live Hydrogen Reading";
    //        xA = "Time (Sec)";
    //        yA = "ppm";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //    if (Data_A.slice(3, 7) == "1000D") {
    //        titleA = "Live Temperature Reading";
    //        xA = "Time (Sec)";
    //        yA = "Degrees (C)";
    //        dataA = Data_A.slice(8, 12);
    //    }
    //}

    ////Port B
   
    //if ((Data_B.slice(0, 2)=="000") && (Data_B.length>15)) {
    //    if (Data_B.slice(3, 7) == "375DA") {
    //        titleA = "Live Ethanol Reading";
    //        xB = "Time (Sec)";
    //        yB = "ppm";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //    if (Data_B.slice(3, 7) == "375EA") {
    //        titleB = "Live Methane Reading";
    //        xB = "Time (Sec)";
    //        yB = "ppm";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //    if (Data_B.slice(3, 7) == "3760A") {
    //        titleB = "Live Liquid Petroleum Reading";
    //        xB = "Time (Sec)";
    //        yB = "ppm";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //    if (Data_B.slice(3, 7) == "3761A") {
    //        titleB = "Live Carbon Monoxide Reading";
    //        xB = "Time (Sec)";
    //        yB = "ppm";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //    if (Data_B.slice(3, 7) == "3762A") {
    //        titleB = "Live Hydrogen Reading";
    //        xB = "Time (Sec)";
    //        yB = "ppm";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //    if (Data_B.slice(3, 7) == "1000D") {
    //        titleB = "Live Temperature Reading";
    //        xB = "Time (Sec)";
    //        yB = "Degrees (C)";
    //        dataB = Data_B.slice(8, 12);
    //    }
    //}
    ////Port C
    //if ((Data_C.slice(0, 2) == "000") && (Data_C.length > 15)) {
    //    if (Data_C.slice(3, 7) == "375DA") {
    //        titleC = "Live Ethanol Reading";
    //        xC = "Time (Sec)";
    //        yC = "ppm";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "375EA") {
    //        titleC = "Live Methane Reading";
    //        xC = "Time (Sec)";
    //        yC = "ppm";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "3760A") {
    //        titleC = "Live Liquid Petroleum Reading";
    //        xC = "Time (Sec)";
    //        yC = "ppm";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "3761A") {
    //        titleC = "Live Carbon Monoxide Reading";
    //        xC = "Time (Sec)";
    //        yC = "ppm";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "3762A") {
    //        titleC = "Live Hydrogen Reading";
    //        xC = "Time (Sec)";
    //        yC = "ppm";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "1000D") {
    //        titleC = "Live Temperature Reading";
    //        xC = "Time (Sec)";
    //        yC = "Degrees (C)";
    //        dataC = Data_C.slice(8, 12);
    //    }
    //}

    ////Port D Formating 
    //if ((Data_D.slice(0, 2) == "000") && (Data_D.length > 15)) {
    //    if (Data_D.slice(3, 7) == "375DA") {
    //        titleD = "Live Ethanol Reading";
    //        xD = "Time (Sec)";
    //        yD = "ppm";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "375EA") {
    //        titleC = "Live Methane Reading";
    //        xD = "Time (Sec)";
    //        yD = "ppm";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "3760A") {
    //        titleC = "Live Liquid Petroleum Reading";
    //        xD = "Time (Sec)";
    //        yD = "ppm";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //    if (Data_C.slice(3, 7) == "3761A") {
    //        titleC = "Live Carbon Monoxide Reading";
    //        xD = "Time (Sec)";
    //        yD = "ppm";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //    if (Data_D.slice(3, 7) == "3762A") {
    //        titleD = "Live Hydrogen Reading";
    //        xD = "Time (Sec)";
    //        yD = "ppm";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //    if (Data_D.slice(3, 7) == "1000D") {
    //        titleD = "Live Temperature Reading";
    //        xD = "Time (Sec)";
    //        yD = "Degrees (C)";
    //        dataD = Data_D.slice(8, 12);
    //    }
    //}

    // Display A
    var dpsA = []; // dataPoints

    var chartA = new CanvasJS.Chart("SensorA",{
        title :{
            text: "Live Hydrogen Reading",
        },
        axisX:{
            title: "Time (Sec)",
        },
        axisY:{
            title: "ppm",
        },
        data: [{
            type: "line",
            dataPoints: dpsA
        }]
    });

    var xValA = 0;
    var yValA = 0;
    var updateIntervalA = 2000;
    var dataLengthA = 10; // number of dataPoints visible at any point

    var updateChartA = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.

        for (var j = 0; j < count; j++) {

            if (xValA < 40) {
                yValA = Math.floor(Math.random() * (49 - 2)) + 2;

            } else {
                yValA = Math.floor(Math.random() * (2100 - 1850)) + 1850;
            }




            dpsA.push({
                x: xValA,
                y: yValA
            });
            xValA++;
            xValA++;
        };
			
        if (dpsA.length > dataLengthA)
        {
            dpsA.shift();				
        }
			
        chartA.render();		

    };

    // generates first set of dataPoints
    updateChartA(dataLengthA); 

    // update chart after specified time. 
    setInterval(function(){updateChartA()}, updateIntervalA); 

    // Display B
    var dpsB = []; // dataPoints

    var chartB = new CanvasJS.Chart("SensorB",{
        title :{
            text: "Live Ethanol Reading",
        },
        axisX:{
            title: "Time (Sec)",
        },
        axisY:{
            title: "ppm",
        },
        data: [{
            type: "line",
            dataPoints: dpsB
        }]
    });

    var xValB = 0;
    var yValB = 0;
    var updateIntervalB = 2000;
    var dataLengthB = 10; // number of dataPoints visible at any point

    var updateChartB = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.

        for (var j = 0; j < count; j++) {

            if (xValB < 42) {
                yValB = Math.floor(Math.random() * (49 - 2)) + 2;

            } else {
                yValB = Math.floor(Math.random() * (6100 - 5950)) + 5950;
            }




            dpsB.push({
                x: xValB,
                y: yValB
            });
            xValB++;
            xValB++;
        };

			
        if (dpsB.length > dataLengthB)
        {
            dpsB.shift();				
        }
			
        chartB.render();		

    };

    // generates first set of dataPoints
    updateChartB(dataLengthB); 

    // update chart after specified time. 
    setInterval(function(){updateChartB()}, updateIntervalB); 

    // Display C
	
    
    var dpsC = []; // dataPoints

    var chartC = new CanvasJS.Chart("SensorC",{
        title :{
            text: "Live Temperature Reading",
        },
        axisX:{
            title: "Time (Sec)",
        },
        axisY:{
            title: "Degrees (C)",
        },
        data: [{
            type: "line",
            dataPoints: dpsC
        }]
    });

    var xValC = 0;
    var yValC = 0;
    var updateIntervalC = 2000;
    var dataLengthC = 10; // number of dataPoints visible at any point

    var updateChartC = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.

        for (var j = 0; j < count; j++) {

            if (xValC < 38) {
                yValC = Math.floor(Math.random() * (25 - 23)) + 23;

            } else {
                yValC = Math.floor(Math.random() * (29 - 27)) + 27;
            }




            dpsC.push({
                x: xValC,
                y: yValC
            });
            xValC++;
            xValC++;
        };
			
        if (dpsC.length > dataLengthC)
        {
            dpsC.shift();				
        }
			
        chartC.render();		

    };

    // generates first set of dataPoints
    updateChartC(dataLengthC); 

    // update chart after specified time. 
    setInterval(function(){updateChartC()}, updateIntervalC); 

	
    //Display D
	
    var dpsD = []; // dataPoints

    var chartD = new CanvasJS.Chart("SensorD",{
        title :{
            text: "Live Methane Reading",
        },
        axisX:{
            title: "Time (Sec)",
        },
        axisY:{
            title: "ppm",
        },
        data: [{
            type: "line",
            dataPoints: dpsD
        }]
    });

    var xValD = 0;
    var yValD = 0;
    var updateIntervalD = 2000;
    var dataLengthD = 10; // number of dataPoints visible at any point

    var updateChartD = function (count) {
        count = count || 1;
        // count is number of times loop runs to generate random dataPoints.

        for (var j = 0; j < count; j++) {

            if (xValD < 40) {
                yValD = Math.floor(Math.random() * (49 - 2)) + 2;

            } else {
                yValD = Math.floor(Math.random() * (500 - 400)) + 400;
            }




            dpsD.push({
                x: xValD,
                y: yValD
            });
            xValD++;
            xValD++;
        };
		
        if (dpsD.length > dataLengthD)
        {
            dpsD.shift();				
        }
			
        chartD.render();		

    };

    // generates first set of dataPoints
    updateChartD(dataLengthD); 

    // update chart after specified time. 
    setInterval(function(){updateChartD()}, updateIntervalD); 

}
  