---
layout: default
lang: en
permalink: /docs_en/Tutorial_Excel-to-GeoJSON
---

## What is GeoJSON?

[GeoJSON](https://geojson.org/) is a file format for encoding geographic data. In GeoJSON, you can define different geometry types:

- Point (typically used for individual buildings, but also for villages, towns, or cities when their exact geographic extensions are not of interest)
- LineString
- Polygon
- MultiPoint
- MultiLineString
- MultiPolygon

GeoJSON was first standardised in 2016 and is now a popular format because of its compatibility with most GIS software. GeoJSON files are, therefore, a common basis for making maps. In the geohumanities community, where commitment to open science practices is high, GeoJSON is frequently used in combination with the free GIS software [QGIS](https://qgis.org/).

## How to create a GeoJSON file from spreadsheets

Many humanities scholars work with spreadsheets like EXCEL for data collection because they lack the resources to maintain a full-fledged spatial database. Creating a valid GeoJSON file from EXCEL is easy when the table is correctly formatted and has the required data columns. Several companies offer online converters (see the XLS-to-GeoJSON Converter by [MyGeodata](https://mygeodata.cloud/converter/xls-to-geojson)) but these tools are not necessarily GDPR-compliant and sensitive or copyright-protected geoinformation should not be uploaded to these platforms.

## Converting data tables with scripts

Programming languages such as Python offer a reliable and safe alternative for the conversion of data tables. Python can be run locally or in an (institutional) data science research infrastructure. You can find a sample script for converting EXCEL to GeoJSON here:

[Create GeoJSON file from EXCEL spreadsheet](https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Colab_Geocoding/GEOJSON_from_EXCEL.ipynb)

This script transforms an EXCEL spreadsheet that contains spatial information (place names) into a GeoJSON file after geocoding the addresses with Open Street Map. Moreover, the script displays the input data on an interactive map. The file comes as a so-called Jupyter notebook with the `.ipynb` file ending. [Jupyter Notebook](https://jupyter.org/) combines computer code, formatted text and (visual) output in a single document, which makes it very convenient for visualisation-focused research fields like geohumanities.

[!WARNING] 
Please note, however, the code provided here was specifically written for [Google Colab](https://colab.research.google.com/) and needs adjustments when run in other environments. While local code executions and institutional coding environments are recommended, Google Colab does not require any user installations and is, therefore, easy to use for beginners.

Your input file can have as many columns as you like but must include one column called "Addresses". The GeoJSON output that is saved to your computer as part of the code execution should have the following structure:

```
{"type": "FeatureCollection", "features": [{"type": "Feature", "geometry": {"type": "Point", "coordinates": [-0.1277653, 51.5074456]}, "properties": {"Event": "Birth", "Date": 1750, "Address": "London"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-1.2578499, 51.7520131]}, "properties": {"Event": "Graduation", "Date": 1770, "Address": "Oxford"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [0.1186637, 52.2055314]}, "properties": {"Event": "Ordination", "Date": 1771, "Address": "Cambridge"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [-0.1400561, 50.8214626]}, "properties": {"Event": "Retirement", "Date": 1820, "Address": "Brighton"}}, {"type": "Feature", "geometry": {"type": "Point", "coordinates": [0.5824703, 50.8553888]}, "properties": {"Event": "Death", "Date": 1822, "Address": "Hastings"}}]}
```
