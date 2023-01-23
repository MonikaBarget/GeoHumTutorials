<h2>Google Colab tutorial for geocoding EXCEL spreadsheets with OpenCage in Python</h2>

<p align="justify">This Google Colab tutorial was written for a workshop for colleagues in early modern history and demonstrates geocoding with the proprietary OpenCage API. Colab is a cloud service that permits the hosting of Jupyter notebooks for running Python code even when users do not have Python installed on their own machines. Also, it is possible to run different sections of code separately and to add free text instructions for less experienced users. One advantage of Google Colab in research and teaching is that teams can interactively and iteratively process and review data. In my case, the input data come from EXCEL spreadsheets, which are still commonly used in smaller projects as databases are difficult to maintain.</p>

<p align="justify">Sample input data, my annotated code and a sample map can be viewed in my <a href="https://github.com/MonikaBarget/GeoHumTutorials/tree/master/Colab_Geocoding">Colab_Geocoding</a> directory.</p>

<p>Access to the <a href="https://colab.research.google.com/drive/1TtMkbA2LFkC0Nuvsq0dZzQqGJIx1xQ7u">actual Colab notebook</a> is restricted is the script makes use of my personal API key.</p>

<p align="justify">My test Colab notebook uses the proprietary <a href="https://opencagedata.com/api">OpenCage API</a> which only permits users with trial accounts a few thousand spatial queries per day. My test notebook lots the geocoded data directly to a static map just to help users double-check the locations. Potentially, geocoding with different APIs should be tested and compared especially when working with historical data.</p>

<p align="justify">While it is also possible to geocode data with software such as <a href="https://www.qgis.org/en/site/">QGIS</p>, capturing additional information such as Geonames (and Wikidata) IDs can be important for making data interoperable and reusable. Working with Python offers many opportunities for enriching the collected data.</p>
