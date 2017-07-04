var express = require('express');

var serialport = require('serialport');

var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var portName = "/dev/cu.usbmodem1421";

var arduinoPort = new serialport(portName, {
    baudrate: 9600,
    parser: serialport.parsers.readline("\r\n")
});

arduinoPort.on('open', function(){
  console.log("Opened Port to Arduino");
});

app.use(express.static('public'));

app.get('/', function(req, res) {
  //we have to provide the full path of the index.html file
  res.sendFile(__dirname + '/public/app.html');
});


io.on('connection', function (socket) {
    console.log("Web socket connected");
    arduinoPort.on('data', function(data){
        var jsonData = JSON.parse(data);
        console.log("Send data to browser");
        socket.emit("data", jsonData.value);
    });
});

http.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
