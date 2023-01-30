<h2>Geocoding with the Geonames API in Python</h2>

<p align="justify">This tutorial is an interactive tutorial that combines actual executable code with explanations in a Google Colab notebook. As the tutorial makes use of my own Geonames API key,
I will only grant access to selected users.</p>

<p align="justify">The Python code (in Jupyter Notebooks format) with in-line comments is available in the <a href="https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Colab_Geocoding/Geocode_Plot_Geonames.ipynb">Colab Geocoding</a> directory. To run the code using your own files, you have to make sure to adjust the file path / directory. Also, each section of code has to be run one after the other. A green arrow on the left hand side indicates if a section of code has been executed correctly. Please see the instructions in the screenshorts below.</p>

<img alt="how to connect Colab DE" src="./PNG_Geodata_DE/GeocodePythonDE.png">
<img alt="run COLAB" src="./PNG_Geodata_DE/RunCOLAB.png">

<p align="justify">This code should first show you the content of the input file, which only had a single column of twelve place names in my sample.
Then the code should geocode your address column with Geonames, add the Geonames ids and official Geonames place descriptions,
and append all the new information to the existing table.</p>

<p align="justify">In the last step, all places which could be geocoded will be plotted as small dots on a simple world map. This is not the ideal display to check the geocoding
of individual cities, which is why I am hoping to include an interactive map display soon. Also, I would like to make the “magic table” features editable. </p>

<img alt="sample map" src="./Colab_Geocoding/TestMap.png">
