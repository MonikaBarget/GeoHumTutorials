---
layout: default
lang: de
---

<h2>Google Colab tutorial for geocoding EXCEL spreadsheets with OpenCage in Python</h2>

<p align="justify">This Google Colab tutorial was written for a workshop with colleagues in early modern history and demonstrates script-based geocoding of place names. <a href="https://colab.research.google.com/">Google Colab</a> is a cloud service that permits the hosting of <a href="https://jupyter.org/">Jupyter notebooks</a> for running <a href="https://www.python.org/">Python</a> code even when users do not have Python installed on their own machines. Also, it is possible to execute different sections of code separately and to add free text instructions for less experienced users. One advantage of Google Colab in research and teaching is that teams can interactively and iteratively process and review data. In my case, the input data come from EXCEL spreadsheets, which are still commonly used in smaller projects as databases are difficult to maintain.</p>

<p align="justify">Sample input data, my annotated code and a sample map can be viewed in my <a href="https://github.com/MonikaBarget/GeoHumTutorials/tree/master/Colab_Geocoding">Colab_Geocoding</a> directory. Access to the <a href="https://colab.research.google.com/drive/1TtMkbA2LFkC0Nuvsq0dZzQqGJIx1xQ7u">actual Colab notebook</a> is restricted because the script makes use of my personal API key. An application programming interface (API) key is a unique combination of characters used to identify and authenticate an application or user. Each user should register to obtain their own key.</p>

<p align="justify">My Colab notebook for <strong>geocoding with OpenCage</strong> uses the proprietary <a href="https://opencagedata.com/api">OpenCage API</a> which only permits users with trial accounts a few thousand spatial queries per day. This notebook plots the geocoded data directly to a static map to help users double-check the identified locations. Potentially, geocoding with different APIs should be tested and compared, especially when working with historical data. This is why I also recommend the scripts for geocoding with the <strong>Geonames</strong> and <strong>Google</strong> APIs.</p>

<p align="justify">To geocode your own EXCEL files, you can execute the script on your own machine, on a Jupyter Notebook server, or on Google Colab. The advantage of Google Colab is that you can run the script as it is -- without installing Python packages first. In all cases, you have to make sure, however, to add <a href="https://www.geonames.org/login">your own Geonames API key</a> and to adjust the file path / directory. Whenever you upload files to your Google Drive on the top level, the standard path is "/content/drive/My Drive/". Any subfolders you create will have to be added as "/content/drive/My Drive/YourFolder/". Please make sure to change all instances of file paths in scripts you download from Github. Similarly, participants of my workshops who have direct access to one of my Google Drive Colabs should copy that folder to create their own instance and also change file paths where necessary.</p>

<p align="justify">Signing up for your own personal API key is important because APIs come with legal obligations and, in many cases, request limits. That means that each API holder can only perform a fixed amount of queries per day to guarantee good performance for all users and to hinder illegal activities. In my scripts shared here, the API key has to be added where you now see a string of hashtags ("#####").</p>
  
<p align="justify">This German screenshot summarises the workflow for copying a shared Colab folder to your own Drive:</p>
  
<img alt="how to connect Colab DE" src="./PNG_Geodata_DE/GeocodePythonDE.png">
  
<p align="justify">Also, each section of code has to be run one after the other. A green arrow on the left hand side indicates if a section of code has been executed correctly. Please see the instruction in the screenshot below.</p>

<img alt="run COLAB" src="./PNG_Geodata_DE/RunCOLAB.png">
