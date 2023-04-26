<h2>Geocoding with the Geonames API in Python</h2>

<p align="justify">This tutorial combines actual executable code with explanations in a Google Colab notebook. As the code requires a Geonames API key,
please consider signing up on the Geonames website first.</p>

<p align="justify">API stands for "application programming interface". It is essentially a web "gateway" that you can use to access data or services. Each user ideally has their own unique API key, which allows the provider to limit requests per user or flag abuse.</p>

<p>GeoNames as a geodata service is mainly using REST APIs and offers 40 different webservices. Geocoder for Python, which is used in the code shared here, supports the following:</p>

<ul>
  <li>(geocoding) retrieve GeoNames’s geocoded data from a query string, and various filters</li>
    <li>(details) retrieve all geonames data for a given geonames_id</li>
    <li>(children) retrieve the hierarchy of a given geonames_id</li>
    <li>(hierarchy) retrieve all children for a given geonames_id</li>
 </ul>

<p>For the full Geocoder documentation, please visit: <a href="https://geocoder.readthedocs.io/providers/GeoNames.html">Geocoder Read the Docs</a>.</p>

<p align="justify">The Python code (in Jupyter Notebooks format) with in-line comments is available in the <a href="https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Colab_Geocoding/Geocode_Plot_Geonames.ipynb">Colab Geocoding</a> directory. Executing this code in a suitable environment should first show you the content of the input file, which only has a single column of twelve place names in my sample. Then the code should geocode your address column with Geonames, add the Geonames ids and official Geonames place descriptions,
and append all the new information to the existing table.</p>

<p align="justify">In the last step, all places which could be geocoded will be plotted as small dots on a simple world map:</p>

<img alt="sample map" src="./Colab_Geocoding/TestMap.png">

<p align="justify">As this isn't the ideal display to check the geocoding
of individual point geometries (e.g. cities), I have provided <a href="./Colab_Geocoding/Geocode_Plot_Geonames_interactiveMAP.ipynb">another script that plots the Geonames geocoding to an interactive map.</a></p>

<p algin="justify">Both Geonames geocoding scripts shared here also generate a <a href="https://geojson.org/">GeoJSON file</a> from your input data. Geoinformation in this standardised format can be analysed and visualised in a wide range of GIS software, including <a href="https://qgis.org/en/site/">QGIS</a>. If you want to learn how to create and print simple maps in QGIS, please check out my <a href="https://monikabarget.github.io/GeoHumTutorials/Tutorial_simpleQGISmaps">QGIS tutorial for beginners</a>. While it is possible to directly geocode data with GIS software, capturing additional information such as Geonames (and Wikidata) IDs, normalised place names, modern postal codes or place types can be important for making data interoperable and reusable. Working with spatial APIs via Python offers many opportunities for enriching the collected data.</p>

<p align="justify">To run the code using your own files, you can run the script on your own machine, on a Jupyter Notebook server, or on <a href="https://colab.research.google.com/">Google Colab</a>. The advantage of Google Colab is that you can run the script as it is -- without installing Python packages first. In all cases, you have to make sure, however, to add <a href="https://www.geonames.org/login">your own Geonames API key</a> and to adjust the file path / directory. Whenever you upload files to your Google Drive on the top level, the standard path is <code>"/content/drive/My Drive/"</code>. Any subfolders you create will have to be added as <code>"/content/drive/My Drive/YourFolder/"</code>. Please make sure to change all instances of file paths in scripts you download from Github. Similarly, participants of my workshops who have direct access to one of my Google Drive Colabs should copy that folder to create their own instance and also change file paths where necessary.</p>

<p align="justify">Signing up for your own personal API key is important because APIs come with legal obligations and, in many cases, request limits. That means that each API holder can only perform a fixed amount of queries per day to guarantee good performance for all users and to hinder illegal activities. In my scripts shared here, the API key has to be added where you now see a string of hashtags ("#####").</p>
  
<p align="justify">This German screenshot summarises the workflow for copying a shared Colab folder to your own Drive:</p>
  
<img alt="how to connect Colab DE" src="./PNG_Geodata_DE/GeocodePythonDE.png">
  
<p align="justify">Also, each section of code has to be run one after the other. A green arrow on the left hand side indicates if a section of code has been executed correctly. Please see the instructions in the screenshorts below.</p>

<img alt="run COLAB" src="./PNG_Geodata_DE/RunCOLAB.png">
