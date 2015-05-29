/*

  webrtc_signal_server.js by Rob Manson (buildAR.com)

  The MIT License

  Copyright (c) 2013 Rob Manson, http://buildAR.com. All rights reserved.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.

*/

// useful libs
var http = require("http");
var fs = require("fs");
var websocket = require("websocket").server;

// general variables
var port = 1234;
var webrtc_clients = [];
var webrtc_discussions = {};

//
var io = require('socket.io').listen(http);
var serialport = require("serialport");
var SerialPort = serialport.SerialPort;


//Port A Setup
var portNameA = "ttyUSB0" // Change
var Data_A = "";
var titleA = "";
var xA = "";
var yA = "";
var dataA;
var serialPortA = new SerialPort(portNameA, {
    baudrate: 115200,
    // For Arduino serial communication, May need larger buffer size
    dataBits: 8,
    buffersize: 1000,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

//Port B Setup
var portNameB = "ttyUSB1" // Change
var Data_B = "";
var titleB = "";
var xB = "";
var yB = "";
var dataB;

var serialPortB = new SerialPort(portNameB, {
    baudrate: 115200,
    // For Arduino serial communication, May need larger buffer size
    dataBits: 8,
    buffersize: 1000,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

//Port C Setup
var portNameC = "ttyUSB2" // Change
var Data_C = "";
var titleC = "";
var xC = "";
var yC = "";
var dataC;

var serialPortC = new SerialPort(portNameC, {
    baudrate: 115200,
    // For Arduino serial communication, May need larger buffer size
    dataBits: 8,
    buffersize: 1000,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

//Port D Setup
var portNameD = "ttyUSB3" // Change
var Data_D = "";
var titleD = "";
var xD = "";
var yD = "";
var dataD;

var serialPortD = new SerialPort(portNameD, {
    baudrate: 115200,
    // For Arduino serial communication, May need larger buffer size
    dataBits: 8,
    buffersize: 1000,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});



serialPortA.on("open", function () {
    //console.log('open');

    serialPortA.on('data', function (data) {
        // console.log('data received: ' + data);
        Data_A = data;
        //console.log('checking variable: ' + receivedData_A);
    });
});



serialPortB.on("open", function () {
    //console.log('open');

    serialPortB.on('data', function (data) {
        // console.log('data received: ' + data);
        Data_B = data;
        //console.log('checking variable: ' + receivedData_A);
    });
});



serialPortC.on("open", function () {
    //console.log('open');

    serialPortC.on('data', function (data) {
        // console.log('data received: ' + data);
        Data_C = data;
        //console.log('checking variable: ' + receivedData_A);
    });
});



serialPortD.on("open", function () {
    //console.log('open');

    serialPortD.on('data', function (data) {
        // console.log('data received: ' + data);
        Data_D = data;
        //console.log('checking variable: ' + receivedData_A);
    });
});


//Stream Serial Data

io.on('connection', function(socket){
    socket.on('Sensors',function( ){
        io.emit('Sensors', {
            Data_A: Data_A,
            Data_B: Data_B,
            Data_C: Data_C,
            Data_D: Data_D,
        });
    });
})



// web server functions
var http_server = http.createServer(function(request, response) {
  var matches = undefined;
  if (matches = request.url.match("^/images/(.*)")) {
    var path = process.cwd()+"/images/"+matches[1];
    fs.readFile(path, function(error, data) {
      if (error) {
        log_error(error);
      } else {
		
        response.end(data);
      }
    });
  }
  else {
   
      if (matches= request.url.indexOf('.min.js') != -1) {
          fs.readFile(__dirname + '/assets/canvasjs.min.js', function (error, data) {
              if (error) {
                  console.log(error);
              }
              else {
                  response.writeHead(200, { 'Content-Type': 'text/javascript' });
                  response.write(data);
                  response.end(data);
              }
          });

      }
      else if (matches = request.url.indexOf('.io.js') != -1) {
          fs.readFile(__dirname + '/assets/dataProcessing.js', function (error, data) {
              if (error) {
                  console.log(error);
              }
              else {
                  response.writeHead(200, { 'Content-Type': 'text/javascript' });
                  response.write(data);
                  response.end(data);
              }
          });

      }
      else if (matches = request.url.indexOf('.js') != -1) {
          fs.readFile(__dirname + '/assets/dataProcessing.js', function (error, data) {
              if (error) {
                  console.log(error);
              }
              else {
                  response.writeHead(200, { 'Content-Type': 'text/javascript' });
                  response.write(data);
                  response.end(data);
              }
          });

      }
      else {
          fs.readFile("video_call_with_chat_and_file_sharing.html", function (error, data) {
              if (error) {
                  log_error(error);
              } else {

                  response.end(data);
              }
          })

      }


    //response.end(page);
  }
});
http_server.listen(port, function() {
  log_comment("server listening (port "+port+")");
});

//var page = undefined;


//fs.readFile("video_call_with_chat_and_file_sharing.html", function(error, data) {
//  if (error) {
//    log_error(error);
//  } else {
    
//      response.end(data);
//  }
//});

//fs.readFile(__dirname + '/assests/canvasjs.min.js', function (error, data) {
//    if (error) {
//        console.log(error);
//    }
//    else {
//        response.writeHead(200, { 'Content-Type': 'text/javascript' });
//        response.write(data);
//        response.end();
//    }
//});




// web socket functions
var websocket_server = new websocket({
  httpServer: http_server
});
websocket_server.on("request", function(request) {
  log_comment("new request ("+request.origin+")");

  var connection = request.accept(null, request.origin);
  log_comment("new connection ("+connection.remoteAddress+")");

  webrtc_clients.push(connection);
  connection.id = webrtc_clients.length-1;
  
  connection.on("message", function(message) {
    if (message.type === "utf8") {
      log_comment("got message "+message.utf8Data);

      var signal = undefined;
      try { signal = JSON.parse(message.utf8Data); } catch(e) { };
      if (signal) {
        if (signal.type === "join" && signal.token !== undefined) {
          try {
            if (webrtc_discussions[signal.token] === undefined) {
              webrtc_discussions[signal.token] = {};
            }
          } catch(e) { };
          try {
            webrtc_discussions[signal.token][connection.id] = true;
          } catch(e) { };
        } else if (signal.token !== undefined) {
          try {
            Object.keys(webrtc_discussions[signal.token]).forEach(function(id) {
              if (id != connection.id) {
                webrtc_clients[id].send(message.utf8Data, log_error);
              }
            });
          } catch(e) { };
        } else {
          log_comment("invalid signal: "+message.utf8Data);
        }
      } else {
        log_comment("invalid signal: "+message.utf8Data);
      }
    }
  });
  
  connection.on("close", function(reason_code, description) {
    log_comment("connection closed ("+this.remoteAddress+" - "+reason_code+" - "+description+")");
    Object.keys(webrtc_discussions).forEach(function(token) {
      Object.keys(webrtc_discussions[token]).forEach(function(id) {
        if (id === connection.id) {
          delete webrtc_discussions[token][id];
        }
      });
    });
  });
});

// utility functions
function log_error(error) {
  if (error !== "Connection closed" && error !== undefined) {
    log_comment("ERROR: "+error);
  }
}
function log_comment(comment) {
  console.log((new Date())+" "+comment);
}
