---
layout: default
lang: en
permalink: /docs_en/Tutorial_geocodingGEONAMES
---

<h2>Geocoding with the Geonames API in Python</h2>

<h3>Working with Google Colab</h3>

<p align="justify">This tutorial combines actual executable code with explanations in a <a href="https://colab.research.google.com/">Google Colab</a> notebook. The advantage of <bold>Google Colab</bold> is that you can run the script without installing Python and individual packages on your own machine. General instructions for using Colab are available <a href="https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Tutorial_GoogleColab.md">here</a>. Please, remember that Google Colab is proprietary software and may be suitable for all types of data.
  
<h3>Getting a geocoding API key</h3>

<p align="justify">Geocoding data via script requires a so-called API key from a geocoding service. API stands for "application programming interface". It is essentially a web "gateway" that you can use to access data or services. Each user ideally has their own unique API key. APIs come with legal obligations and, in many cases, request limits. That means that each API holder can only perform a fixed amount of queries per day to guarantee good performance for all users and to hinder illegal activities. In my scripts shared here, the API key has to be added where you now see a string of hashtags ("#####").</p>
  
<p align="justify">In this tutorial, we are using the Geonames API. So, please, sign up for your personal key on the <a href="http://www.geonames.org/login">Geonames website</a> first. You will receive an activation link via link. Please make sure to tick the box for activating the web service. Your API key is (as of April 2023) identical with your user name.</p>

<img src="./Screenshots Colab/Geonames_Sign-Up.png" width="100%" align="left"/>

<p>GeoNames as a geodata service is mainly using REST APIs and offers 40 different webservices. Geocoder for Python, which is used in the code shared here, supports the following:</p>

<ul>
  <li>(geocoding) retrieve GeoNames’s geocoded data from a query string, and various filters</li>
    <li>(details) retrieve all geonames data for a given geonames_id</li>
    <li>(children) retrieve the hierarchy of a given geonames_id</li>
    <li>(hierarchy) retrieve all children for a given geonames_id</li>
 </ul>

<p>For the full Geocoder documentation, please visit: <a href="https://geocoder.readthedocs.io/providers/GeoNames.html">Geocoder Read the Docs</a>.</p>
  
<h3>Geocoding data and plotting a static map</h3>

<p align="justify">My first script making use of Python Geocoder and the Geonames API <a href="https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Colab_Geocoding/Geocode_Plot_Geonames.ipynb">geocodes placenames from a table and plots a static map</a>. This Python code is provided in Jupyter Notebook format with in-line comments for execution in Google Colab (also check the Colab Geocoding directory for more examples). Running this code should first show you the content of the input file, which only has a single column of twelve place names in my own sample. Then the code should geocode your address column with Geonames, add the Geonames ids and official Geonames place descriptions, and append all the new information to the existing table. In the last step, all places which could be geocoded will be plotted as small dots on a simple world map:</p>

<img alt="sample map" src="./Colab_Geocoding/TestMap.png" width="100%">

<h3>Geocoding data and plotting an interactive map</h3>

<p align="justify">As static maps aren't the ideal display to check the geocoding
of individual point geometries (e.g. cities), I have provided <a href="./Colab_Geocoding/Geocode_Plot_Geonames_interactiveMAP-withLabels.ipynb">another script that plots the geocoded data to an interactive map with labels.</a> This map is generated with the <bold>ipyleaflet</bold> package for Python and permits different ZOOM levels. The labels with place names appear when clicking on an individual place marker. Also, the base map and colours used for markers can be adjusted.</p>

<img src="./Screenshots Colab/Ipyleaflet_Map-with-Labels.png"/>

<h3>Geocoding data from more than one column (e.g. "address" & "continent")</h3>

<p algin="justify">In some cases, it may be necessary to refine your address information, e.g. by adding a country or continent in an additional column. That may especially be the case of places of the same name exist more than once. A frequent challenge are the "colonial twins" that many European cities have in America, in Asia or in Oceania. For geocoding data from more than one column, please use my script for <a href="./Colab_Geocoding/Geocode_Plot_Geonames_interactiveMAP_withLabels_flexibleGeocoding_twoColumns.ipynb">flexible geocoding</a>. In addition to a line of code that merges spatial information from two different columns, it also performs an initial check if data in your table have already been geocoded with Geonames.</p>

<h3>Consecutive geocoding to respect the hourly API limit of 1000 queries</h3>

<p algin="justify">A <a href="./Colab_Geocoding/Geocode_Plot_Geonames_interactiveMAP_withLabels_flexibleGeocoding_v2.ipynb">script that checks if data already have a Geonames ID and coordinates</a> in your table can be very helpful when geocoding longer tables with more than 1000 rows. To geocode such an amount of data, you either need to sign up for a paid Geonames account or geocode your data consecutively over time as the hourly limit of requests is 1000.</p>

<h3>Generating a GeoJSON file for working with GIS tools</h3>

<p algin="justify">Both Geonames geocoding scripts shared here also generate a <a href="https://geojson.org/">GeoJSON file</a> from your input data. Geoinformation in this standardised format can be analysed and visualised in a wide range of GIS software, including <a href="https://qgis.org/en/site/">QGIS</a>. If you want to learn how to create and print simple maps in QGIS, please check out my <a href="https://monikabarget.github.io/GeoHumTutorials/Tutorial_simpleQGISmaps">QGIS tutorial for beginners</a>. While it is possible to directly geocode data with GIS software, capturing additional information such as Geonames (and Wikidata) IDs, normalised place names, modern postal codes or place types can be important for making data interoperable and reusable. Working with spatial APIs via Python offers many opportunities for enriching the collected data.</p>

<h3>Step-by-step guide for running the code</h3>

If you have never run code in Colab before, you might want to follow the step-by-step guide in my YouTube video. This video shows the script for geocoding with Geonames to create an interactive map with labels. The basic steps are the same for all scripts using the Geonames API.

<a href="https://www.youtube.com/embed/56JKd1b0M7Q"><img src="./Screenshots Colab/Geocoding_Geonames_YouTube.png" alt="YouTube video player"></a>
