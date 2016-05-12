var smoothie = new SmoothieChart();
var line1 = new TimeSeries();
var socket = io();

smoothie.streamTo(document.getElementById("mycanvas"));
smoothie.addTimeSeries(line1);

socket.on('data', function(msg) {
    console.log(msg);
    if (msg.unit === 'raw') {
        line1.append(new Date().getTime(), msg.value);
    }

});
