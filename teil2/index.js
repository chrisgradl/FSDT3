console.log("Hello World: " + __dirname);
var express = require('express');
var app = express();

app.use(express.static(__dirname + "/client/"));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/client/index.html");
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});
