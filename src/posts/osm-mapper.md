---
title: Open Street Map Mapper
description: Developed a graphical and interactive map application with Open Street Map (OSM) data
id: 3
categories:
    - C++
    - Teamwork
    - GTK
    - Linux
    - Git
icon: fa-solid fa-map
start_date: "September 2022"
end_date: "December 2022"
published: true
---

# Overview

The **Open Street Map (OSM) Mapper** project was completed as a course project of ECE297 (Software Design and Communication) at University of Toronto. It uses OSM data to create an interactive and graphical user interface, just like Google Maps or Apple Maps.  

This project is done as a team, with Junho Sung and Emily Bao.

# Usage

## Main Screen
![main screen](../images/osmmapper/startingscreen.png)

The main screen shows all streets of a chosen city, and displays detailed information when an intersection is clicked.

## Finding Shortest Path
![pathfinding](../images/osmmapper/pathfinding.png)

How quick I can get from home to work? When two intersections are clicked, the application computes and displays the shortest path from one to another. The path-finding mechanism is based on A* search algorithm.

## Finding Pickup Route
![walkdrive-visual](../images/osmmapper/walkdrive_visual.png)

Just like Uber, the application displays the best route with a mixture of walking and driving. The pick-up location is shown for the user to walk to and wait for the driver to pick them up.

![walkdrive-instruction](../images/osmmapper/walkdrive_instruction.png)

For the convenience, a step-by step instruction is shown to the user. This tells them where to start and which directions to take until the pick-up location. Then, directions for the driver is also provided in order to reach the final destination.

## Displaying Weather Information

![weather-info](../images/osmmapper/weatherinfo.png)

A walk in a rainy day should be avoided! The OSM mapper application retrieves the weather information from DarkSky API, and displays it to the user through the terminal. The JSON data is retrived using the libcurl library.

## Finding an Intersection

![findintersection1](../images/osmmapper/findintersection1.png)
![findintersection2](../images/osmmapper/findintersection2.png)

Searching for a specific place is also a good thing to have! An intersection can be found by typing two street names into the graphical user interface (GUI). For convenience, possible names of street names are auto-completed as a user types.  

## Changing Cities
![cityload](../images/osmmapper/cityload2.png)

The demonstration so far is based on Toroto, Canada. However, the application works not only in Toronto, but various cities as long as the OSM data  is provided. For example, the screenshot above loaded London, England.

# Credit
Most API used in this application is developed by ECE297 team at University of Toronto. The APIs include:
- StreetDataBase: used for retrieving high-level map data(e.g. streets and intersections)
- OSMDatabase: used for retrieving low-level OSM data (e.g. OSM node)
- EZGL: used for creating graphical user interface (GUI)
