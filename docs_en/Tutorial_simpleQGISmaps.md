---
layout: default
lang: en
permalink: /docs_en/Tutorial_simpleQGISmaps
---

<h2>Creating Simple Maps with QGIS</h2>

<p align="justify">As a follow-up to the <a href="https://monikabarget.github.io/GeoHumTutorials/Tutorial1_GeoJSON">introduction to creating GeoJSON files</a>, this tutorial focuses on visualising these geodata in the open source Geographic Information System <strong>QGIS</strong> (https://www.qgis.org/en/site/).</p>

<p align="justify">QGIS must be installed on your hard drive, which means it is only suitable for users who have administrator rights on their computers. Otherwise, the browser-based platform <strong>Mapbox</strong> (https://www.mapbox.com/) can be used to create printable maps, though it is less intuitive to use.</p>

<p align="justify">The QGIS user interface is similar to image editing software and allows both the import of standardised geographical data from various sources and its display on different base maps. Most base maps, however, require (commercial) usage rights.</p>

<p align="justify">One free base map is the Open Street Map standard map, which can be loaded in QGIS via the "Web" tab. However, this map is only recommended for historical applications if user orientation in space is the priority, as modern borders and infrastructure are visible. Additional free base maps can be installed via various QGIS plug-ins and also accessed via "Web".</p>

<img alt="Screenshot 1: Open base map" src="/screenshots/QGIS_Screenshot1_OSM Basiskarte öffnen.png">

<img alt="Screenshot 2: View of OSM base map as layer" src="/screenshots/QGIS_Screenshot2_OSM Basiskarte.png">

<p align="justify">The previously prepared GeoJSON files are added as new vector layers via "Add Layer".</p>

<img alt="Screenshot 3: Add vector layer" src="/screenshots/QGIS_Screenshot3_Vektorlayer.png">

<p align="justify">It is important to set an appropriate geographic projection ("set CRS") for both the base map and all data layers to ensure that spatial data is correctly aligned.</p>

<img alt="Screenshot 4: Set CRS" src="/screenshots/QGIS_Screenshot4_KBS setzen.png">

<p align="justify">You can then change the appearance of the data layers via "Properties".</p>

<p>QGIS offers the following functions:</p>

<ul>
    <li>Change map symbols, their size and colour</li>
    <li>Add labels</li>
    <li>Scale-dependent visibility of map elements</li>
    <li>Define data dependencies</li>
    <li>Data descriptions</li>
    <li>Data repair tools</li>
    <li>3D views</li>
    <li>Data charts</li>
    <li>Selective masking or visibility of symbols</li>
    <li>Management of user forms</li>
    <li>etc.</li>
</ul>

<p align="justify">There are detailed video tutorials for these functions (e.g., the series <a href="https://www.youtube.com/watch?v=kCnNWyl9qSE">QGIS 3 for Absolute Beginners</a> by Klas Karlsson) as well as the official QGIS documentation.</p>

<p align="justify">For simple maps, the label function is often the most relevant.</p>

<img alt="Screenshot 5: Choose label in layer properties" src="/screenshots/QGIS_Screenshot5_Layereigenschaften_Label.png">

<p align="justify">You can either choose a single label per map element based on a specific attribute (e.g., "Name") or define labelling based on (mathematical) rules. A detailed explanation of various label functions can be found in <a href="https://docs.qgis.org/2.14/en/docs/training_manual/vector_classification/label_tool.html">Lesson 4.2 of the QGIS documentation</a>.</p>

<img alt="Screenshot 6: Display simple labels on map" src="/screenshots/QGIS_Screenshot6_added labels.png">

<p align="justify">Since maps created in QGIS are often needed for publication in academic journals or posters, it is also important to become familiar with QGIS's "Print Layouts". Preparing specific maps or map sections for print is unfortunately not entirely straightforward in QGIS, so watching a video tutorial is highly recommended. In German, there is a video series by Marshal Mappers. A new print layout is opened via "Project -> New Print Layout".</p>

<img alt="Screenshot 7: Create new print layout" src="/screenshots/QGIS_Screenshot7_open print layout.png">

<p align="justify">Each print layout must be given a unique name. Within the print layout, the current map section or the section to be printed must be loaded separately. The individual steps are explained in more detail in the German-language video <a href="https://www.youtube.com/watch?v=rpkeBZHrXVQ&t=2s">QGIS 3 – Tutorial – Map Layout Part 1</a>.</p>

<iframe width="500" height="281" src="https://www.youtube.com/embed/rpkeBZHrXVQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p align="justify">In the print layout, attribute information can be displayed either as labels or in a map legend. The legend can be given a freely chosen title. The layout and element properties can be adjusted in the panel to the right of the map. Including a legend is particularly advisable for dense map images with many labels.</p>

<img alt="Screenshot 8: Create legend in print layout" src="/screenshots/QGIS_Screenshot8_Legende.png">

<p align="justify">This step is described in more detail in <a href="https://docs.qgis.org/3.4/en/docs/training_manual/map_composer/map_composer.html">Lesson 5.1 of the QGIS documentation</a>. It is also worth checking questions and answers from the GIS community on <a href="https://gis.stackexchange.com/">GIS Stack Exchange</a> or asking a question of your own.</p>
