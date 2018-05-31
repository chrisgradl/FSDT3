---
layout: default
title:  "Course Outline"
date:   2018-05-28 08:00:00
categories: main
---

## Content

In the second part of ASEN you will learn how to retrieve, process, store and visualize sensor data from the Arduino. You will develop a Node.js application which runs on your local machine. We will use state of the art web technologies to build the sensor application.

## Contact

* Email: <christian.gradl@fhstp.ac.at>
* [ecampus](https://ecampus.fhstp.ac.at/course/view.php?id=18801)

## Grades

The grade in this part is 50% for the whole course

The grade consists of:

|                             |         |
|:---------------------------:| -------:|
| Assignment                    |   10%   |
| Project + Presentation                     |   20%   |
| Oral Exam         |   20%   |


## Course Schedule

|Date         | Amount  |Type   |Content
|:-----------:| -------:|-------:|
|2018-05-28   | 3 Units |Online  |Node.JS & NPM
|2018-06-05   | 2 Units |Online  | D3.js Basics
|2018-06-08   | 5 Units |Presence| NodeJS Application    
|2018-06-09   | 5 Units |Presence| Realtime Visualisation
|2018-06-15   |3 Units   | Exam  |

## Questions

### Why are the online session in advance to the presence lessons?
We will learn the basics and will prepare for the presence lessons in the online sessions

### There are only 6 days between the last lesson and the exam?
To ease this situation you will:
- get the questions for the exam at 2018-05-31 10:00 AM
- get 2 or 3 units on 2018-06-09 to work on your project
- a simple assignment



## Prerequisite
- Command Line
- node.js
- npm
- Socket.io
- Express

We do a short quiz about the following technologies if you don't know the answer just say so!


## Main Aim

Our main aim for this course:

![FSDT3 Architecture]({{ site.url }}/fsdt3/img/goal.gif)

The main building blocks of our app:
![FSDT3 Architecture]({{ site.url }}/fsdt3/img/fsdt3_architecture.png)

### How to get Data from the Arduino to our Node Appliction and then to our website?

We will use a 3rd party module called serialport to read the sensor data out from the Arduino.

### How to display the data on a website?

We will use the socket.io module to send the sensor values to a html frontend
