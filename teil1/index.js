//load serial port module
var serialport = require('serialport');
var portName = '/dev/cu.usbmodem1421';

var express = require('express');
var app = express();
var http = require('http').Server(app);

var socketio = require('socket.io')(http);

var simulateArduino = false;

serialport.list(function(err, ports) {

    ports.forEach(function(port) {
        console.log(port);
    });
});

app.get('/', function(req, res) {
    res.sendFile(__dirname + "/client/index.html");
});
//_dirname contains path from where node is started
app.use(express.static(__dirname + "/client"));

http.listen(3000);

var myPort = new serialport.SerialPort(portName, {
    baudrate: 9600,
    parser: serialport.parsers.readline("\r\n")
});

socketio.on('connection', function(socket) {
    console.log("WebSocket connected");

    if (simulateArduino) {
        sendRandomData(socket);
    } else {
        myPort.on('data', function(data) {
            console.log(data);
            var obj = JSON.parse(data);
            socket.emit('data', obj);
        });
    }
});

myPort.on('open', function() {
    console.log("Arduino Port is open");
});

myPort.on('error', function(err) {
    console.error(err);
});


// when arduino is not working send random data to the client for visualization
// therefore uncomment this code and add set simulateArduino = true  in websocket onConnected Callback
var sensorJson = JSON.parse('{"timestamp": 19123,"type": "heart rate sensor raw","unit": "raw","value": 987}');
function sendRandomData(socket) {
    setInterval(function() {
        sensorJson.value = Math.random();
        socket.emit('data', sensorJson);
    }, 100);
}
