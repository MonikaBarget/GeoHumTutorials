---
layout: default
lang: en
---

<h2>Geospatial analysis & visualisation in Python</h2>
<h3>Finding the right geospatial package</h3>

<p>In a MEDIUM article from July 2023, Neha Sharma described a total of 70 Python packages that can be used for the collection, analysis and visualisation of geospatial data:
<a href="https://medium.com/@ns_geoai/70-geospatial-python-libraries-54604d815a7b">70 Geospatial Python Libraries</a>
The list ranges from geodata APIs to general data analysis tools, interface builders and bespoke mapping tools. Also, the use of AI in geospatial analysis, also referred to as <a href="https://medium.com/@ns_geoai/what-is-geoai-90af81c6d17e">GeoAI</a>, is becoming increasingly important. Not all packages and approaches, however, are equally suitable for geohumanities applications and especially working with (incomplete and fuzzy) historical spatial data.
This is why the GeoHumTutorials repository aims to provide more specific examples for humanities students and scholars.</p>

<h3>Recommended packages for beginners (with links to tutorials)</h3>

- <a href="https://python-visualization.github.io/folium/latest/">Folium</a> (see tutorial by <a href="https://python.plainenglish.io/crafting-compelling-interactive-visualizations-with-python-and-folium-99a95d41219b">Godwin Murith</a>)
<p>Folium is a Python wrapper for Leaflet.js, which is a popular JavaScript library for interactive maps. This pakcage permits the combination of several layers. 
  Folium provides a FeatureGroup class to group several layers together so that they can be displayed and edited as a single entity. Geoinformation from dataframes is read to lists. </p>

- GeoPy (including native geocoding)
  
- Geopandas (for working with spreadsheets that include coordinates and spatial attributes)

<p>Geopandas can process the two types of spatial data, vector data (geometrie) and raster data (continuous surfaces). With geopandas.read_file(), different formats including GeoJson can be opened. Geographic coordinates can be processed in degrees or as projected coordinates for 2D display. Coordinates can be tranformed between the two formats, e.g. using .to_crs(). In general, Geopandas shares many methods and attributes with the shapely package. Four key attributes are area (calculating area of geometries), boundary (gets boundaries of a polygon), distance (between two geometries), and plotting (with zoom options). The distance between two geometries is mostly calculcated as a straight line, indicating the minimum distance. Distance between one specific point and an area can be calculated by using the area centroid: geometry.distance(centroid). The plotting method permits several arguments, including the figure size: e.g. ax = districts.plot(figsize=(10,6). Special operations that Geopandas can perform are buffers (radius definition around geometries), overlays, and intersections (between geometries). e.g. districts.overlay(parks, how="intersection").</p>
  
- <a href="https://ipyleaflet.readthedocs.io/en/latest/">ipyleaflet</a> (see use case in my <a href="https://monikabarget.github.io/GeoHumTutorials/Tutorial_geocodingGEONAMES">Geocoding with Geonames</a> tutorial)
  
- <a href="https://dash.plotly.com/tutorial">Dash</a> (see <a href="https://pub.aimind.so/geospatial-visualizations-with-dash-and-folium-a36a9face91d">tutorial for geospatial visualizations with Dash and Folium</a> by Osvaldo Yanez)
  
<p>Dash is an app-building package that can also be used for the deployment of maps.</p>
  
