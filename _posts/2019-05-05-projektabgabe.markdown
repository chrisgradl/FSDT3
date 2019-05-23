---
layout: default
title:  "Information regarding exercise and exam"
date:   2019-05-19 02:00:00
categories: main
---

Abgabe

Die Abgabe besteht aus 2 Teilen: 

### 1
- Adaptiere die bestehende Node.js Server Anwendung folgendermaßen
- Das Programm soll die Sensorwerte vom Arduino in einem File speichern. (So wie es wir bereits im Unterricht gemacht haben)
- Säubere das Projekt. Es soll wirklich nur mehr den Code enthalten um die Sensorwerte vom Aruino zu speichern. 
- Wir werden die Dateien aber nicht als csv File speichern sonder als JSON (file.json)!
- Ein erstelltes File soll folgendes Format haben:

```
[
	{ "timestamp": 83806, "type": "heart rate sensor raw", "unit": "raw", "value": 44 },
	{ "timestamp": 83806, "type": "heart rate sensor raw", "unit": "raw", "value": 44 }
]
```
- Das File muss valides JSON enthalten und in ein Javascript Object umgewandelt werden können!
- Wie oben sichtbar ist es ein Javascript Array mit Sensorwert Objekten
- Das Array soll mindestens 100 Werte enthalten

### 2

- Visualisere mit React und der Library https://github.com/uber/react-vis/ die Daten aus dem gespeicherten File aus Punkt 1!
- Erstelle eine neues React Projekt
- installiere die react-vis Library
- Kopiere das File mit den Sensordaten in den public Folder
- Installiere die Library axios (https://github.com/axios/axios)
- Mache mit axios einen http Request um die Sensordaten aus den public Folder zu laden (am besten wohl in der componentDidMount Methode)  
- Visualisiere den Datensatz in einem Linegraph (wie im Unterricht)
- Wenn beim Laden des Datensatzes über axios ein Fehler passiert zeige diesen auf der Website an!

Nicht zwinged notwendig für die Abgabe aber eine nette Fleißaufgabe:
- Das Laden des Datensatzes soll mit einem Button und einem Input Field erweitert werden. Der User kann also eine URL zu einem Datensatz eingeben und beim Klick auf den Button soll dieser Datensatz geladen und visualisert werden.  

### Abgabe:

- Die Abgabe erfolgt am ecampus bis zum Prüfungstermin
- Abgabe als zip File mit folgender Struktur:

asen2_matrikelnummer.zip
  darin 2 ordner
  server (Node.js Programm)
  client (React Programm)

der node_module ordner muss in den 2 Ordnern gelöscht werden!


