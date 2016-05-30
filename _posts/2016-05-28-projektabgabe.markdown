---
layout: default
title:  "Infos zur Projektabgabe & Prüfung"
date:   2016-05-27 17:50:00
categories: main
---

# Abgabe

- Visualisiere einen mit dem Arduino aufgezeichneten Datensatz mit plottable.js in einem Linegraph. Verwende dazu die Funktion d3.json oder d3.csv. Baue außerdem eine Interaktion ein ( zb: Zoom oder Datenpunkt auswählen)
- Erweitere die Anwendung aus teil1: Anstatt mit smoothie.js soll die client Visualisierung mit plottable.js erfolgen: Dabei soll die Visualisierung in einem gewissen Interval upgedated werden (z.b.: jede Sekunde).
- Die Abgabe erfolgt als zip file. Name der Datei ist matrikelnummer.zip
- Code soll ausreichend kommentiert und nachvollziehbar sein
- Die Abgabe erfolgt am ecampus bis zum 30.Juni
- Da die Zeit zwischen letzter Übung und Prüfung relative kurz ist muss das Beispiel nur abgegeben und ausreichend dokumentiert werden. Daher ist bis Semesterende Zeit für die Abgabe  

## Tipp für die Echtzeit-Visualiserung

- Um die Daten eines Plots in plottablejs upzudaten muss NICHT jedesmal ein neues Datenset erstellt werden und die render Funktion neu ausgeführt werden. Es reicht das Dataset upzudaten:

{% highlight javascript %}

//init the Visualization do it only one time
var dataset = new Plottable.Dataset(dataarray);
plot.addDataset(dataset);


//call this function everytime the dataarray changes
dataset.data(dataarray);
{% endhighlight %}

# Prüfung

Für die Prüfung sollen die Beispiele aus dem Unterricht und der 1.Hausübung verstanden und erklärt werden können. Außerdem sollen die grundlegenden Konzepte der verwendeten Technologien erklärt werden können

### Was ist Node.js?

### Was ist NPM?

### Was ist express.js und wofür haben wir es verwendet?

### Für welche Funktion haben wir Socket.io verwendet und was macht es?

### Wie ist unsere Client / Server Anwendung aufgebaut?

### Wie haben wir die Daten vom Arduino ausgelesen?

### Wir haben ein paar Mal Callbacks / Events verwendet wobei?

### Wie können Daten in plottablejs geladen werden?

### Welche Komponenten für plottablejs kennst du?

### Was ist SVG?
