---
layout: default
title:  "Information regarding exercise and exam"
date:   2018-06-09 02:00:00
categories: main
---

Abgabe

Die Abgabe besteht aus 2 Teilen:

### 1
- Visualisiere einen mit dem Arduino aufgezeichneten Datensatz mit plottable.js in einem Linegraph. Verwende dazu die Funktion  d3.csv. Baue außerdem eine Interaktion ein ( zb: Zoom oder Datenpunkt auswählen)

### 2

- Erweitere die Arduino Anwendung: Anstatt mit smoothie.js soll die client Visualisierung mit plottable.js erfolgen: Dabei soll die Visualisierung in einem gewissen Interval upgedated werden wenn 100 neue Datenpunkte vom Arduino empfangen wurden
- Code soll ausreichend kommentiert und nachvollziehbar sein

### Abgabe:

- Die Abgabe erfolgt am ecampus bis zum Prüfungstermin
- Abgabe als zip File mit folgender Struktur:

asen2_matrikelnummer.zip
  darin 2 ordner
  ue1
  ue2

für jede Übung soll ein npm projekt angelegt werden
der node_module ordner soll gelöscht werden

## Tipp für die Echtzeit-Visualiserung

- Um die Daten eines Plots in plottablejs upzudaten muss NICHT jedesmal ein neues Datenset erstellt werden und die render Funktion neu ausgeführt werden. Es reicht das Dataset upzudaten:

{% highlight javascript %}

//init the Visualization do it only one time and add the
var dataset = new Plottable.Dataset(dataarray);
plot.addDataset(dataset);

//call this function everytime the dataarray changes
dataset.data(dataarray);
{% endhighlight %}
