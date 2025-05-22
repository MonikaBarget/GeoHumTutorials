---
layout: default
lang: en
permalink: /docs_en/Tutorial_Excel-to-GeoJSON
---

## What is GeoJSON?

[GeoJSON](https://geojson.org/) is a file format for encoding geographic data. In GeoJSON, you can define different geometry types:

- Point
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

This script transform an EXCEL spreadsheet that contains geocoded spatial information (coordinates) into a GeoJSON file. Moreover, the script displays the input data on an interactive map. The file comes as a so-called Jupyter notebook with the `.ipynb` file ending. [Jupyter Notebook](https://jupyter.org/) combines computer code, formatted text and (visual) output in a single document, which makes it very convenient for visualisation-focused research fields like geohumanities.

Please note, however, the code provided here was specifically written for [Google Colab](https://colab.research.google.com/) and needs adjustments when run in other environments. While local code executions and institutional coding environments are recommended, Google Colab does not require any user installations and is, therefore, easy to use for beginners.
