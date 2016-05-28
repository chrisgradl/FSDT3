var xScale = new Plottable.Scales.Linear();
var yScale = new Plottable.Scales.Linear().domain([0, 1]);

var xAxis = new Plottable.Axes.Numeric(xScale, "bottom");
var yAxis = new Plottable.Axes.Numeric(yScale, "left");
var plot = new Plottable.Plots.Line();

plot.x(function(d) {
    return d.seconds;
}, xScale);
plot.y(function(d) {
    return d.mV;
}, yScale);



var chart = new Plottable.Components.Table([
    [yAxis, plot],
    [null, xAxis]
]);

d3.csv("/data/ecg.csv", function(err, data) {

    if (err) {
        console.error(err);
    }

    var dataset = new Plottable.Dataset(data);
    plot.addDataset(dataset);
    chart.renderTo("svg#tutorial-result");

});

var interaction = new Plottable.Interactions
.PanZoom(xScale, null)
.attachTo(chart);
