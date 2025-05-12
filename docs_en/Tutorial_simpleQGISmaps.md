---
layout: default
lang: en
---

<h2>Gestaltung einfacher Karten mit QGIS</h2>

<p align="justify">Als Ergänzung zur <a href="https://monikabarget.github.io/GeoHumTutorials/Tutorial1_GeoJSON">Einführung in die Erstellung von GeoJSON-Dateien</a> beschäftigt sich der heutige Beitrag mit der Visualisierung dieser Geodaten im Open Source Geoinformationssystem <strong>QGIS</strong> (https://www.qgis.org/en/site/).</p>

<p align="justify">QGIS erfordert eine Installation auf der Festplatte und ist daher nur für Nutzer/innen geeignet, die auf Ihren Computern Administratorenrechte haben. Andernfalls kann für die Erstellung von Karten, die sich auf für den Druck eignen, die browserbasierte Plattform <strong>Mapbox</strong> (https://www.mapbox.com/) verwendet werden, die in der Anwendung allerdings weniger intuitiv ist.</p>

<p align="justify">Die Nutzeroberfläche von QGIS erinnert an Bildbearbeitungsprogramme und ermöglicht sowohl den Import standardisierter geographischer Daten aus verschiedenen Quellen, als auch deren Darstellung auf unterschiedlichen Hintergrundkarten. Für die meisten Hintergrundkarten sind allerdings (gewerbliche) Nutzungrechte erforderlich.</p>

<p align="justify">Eine kostenfreie Basiskarte ist die Standardkarte von Open Street Map, die in QGIS über den "Web" Reiter geladen werden kann. Diese Karte ist allerdings für historische Anwendungen nur dann zu empfehlen, wenn du Orientierung der Nutzer*innen im Raum im Vordergrund stehen soll, da moderne Grenzen und Infrastrukturen sichtbar sind. Weitere kostenlose Basiskarten können über verschiedene QGIS Plug-Ins installiert und ebenfalls über "Web" geladen werden.</p>

<img alt="Screenshot 1: Basiskarte öffnen" src="./QGIS_Screenshot1_OSM Basiskarte öffnen.png">

<img alt="Screenshot 2: Ansicht der OSM Basiskarte als Layer" src="./QGIS_Screenshot2_OSM Basiskarte.png">

<p align="justify">Die zuvor vorbereiteten GeoJSON-Dateien werden über "Layer hinzufügen" als neue Vektorlayer integriert.</p>

<img alt="Screenshot 3: Vektorlayer hinzufügen" src="./QGIS_Screenshot3_Vektorlayer.png">

<p align="justify">Hier ist es wichtig, für die Hintergrundkarte und alle Datenebenen eine passende geographische Projektion ("KBS setzen") zu wählen, damit die Ortsdaten in der richtigen Relation zueinander abgebildet werden.</p>

<img alt="Screenshot 4: KBS setzen" src="./QGIS_Screenshot4_KBS setzen.png">

<p align="justify">Über "Eigenschaften" kann dann die Darstellung der Datenlayer verändert werden.</p>

<p>Hier bietet QGIS folgende Funktionen:</p>

<ul>
    <li>Verändern der Kartensymbole, ihrer Größe und Farbe</li>
    <li>Einfügen von Labels</li>
    <li>Maßstababhängige Sichtbarkeit von Kartenelementen</li>
    <li>Definition von Datenabhängigkeiten</li>
    <li>Datenbeschreibung</li>
    <li>Datenreparaturen</li>
    <li>3D Ansichten</li>
    <li>Datendiagramme</li>
    <li>Selektive Maskierung oder Sichtbarkeit von Symbolen</li>
    <li>Verwaltung von Benutzerformularen</li>
    <li>usw.</li>
</ul>

<p align="justify">Für diese Funktionen gibt es ausführliche Video-Tutorials (z.B. die Reihe <a href="https://www.youtube.com/watch?v=kCnNWyl9qSE">QGIS 3 for Absolute Beginners</a> von Klas Karlsson sowie die Dokumentation auf der offiziellen QGIS-Webseite.</p>

<p align="justify">Für einfache Karten ist meistens die Label-Funktion besonders revelant.</p>

<img alt="Screenshot 5: Label in Layereigenschaften wählen" src="./QGIS_Screenshot5_Layereigenschaften_Label.png">


<p align="justify">Hier kann entweder eine einzelne Beschriftung pro Kartenelement basierend auf einem bestimmten Attribut (z.B. "Name") ausgewählt oder die Beschriftung bestimmten (mathematischen) Regeln unterworfen werden. Eine ausführliche Erklärung der verschiedenen Label-Funktionen bietet [Lektion 4.2 in der QGIS Dokumentation](https://docs.qgis.org/2.14/en/docs/training_manual/vector_classification/label_tool.html).</p>

<img alt="Screenshot 6: Darstellung einfacher Labels auf der Karte" src="./QGIS_Screenshot6_added labels.png">


<p align="justify">Da in QGIS erstellte Karten oft für die Veröffentlichung in wissenschaftlichen Publikationen oder auf Postern benötigt werden, ist es außerdem wichtig, sich mit den sog. "Drucklayouts" in QGIS vertraut zu machen. Die Vorbereitung bestimmter Karten oder Kartenausschnitte für den Druck ist in QGIS leider nicht ganz einfach, weshalb man sich ein entsprechendes Video-Tutorial ansehen sollte. In deutscher Sprache gibt es z.B. eine Videoserie von Marshal Mappers. Geöffnet wird ein neues Drucklayout unter "Projekt -> Neues Drucklayout".</p>

<img alt="Screenshot 7: neues Drucklayout erstellen" src="./QGIS_Screenshot7_open print layout.png">


<p align="justify">Für jedes Drucklayout muss ein eindeutiger Layoutname gewählt werden. Im Drucklayout selbst muss außerdem der aktuelle Kartenausschnitt bzw. der Auschnitt, der gedruckt werden soll, separat geladen werden. Die einzelnen Arbeitsschritte erklärt z.B. das deutschsprachige Video [QGIS 3 - Tutorial - Kartenlayout Teil 1](https://www.youtube.com/watch?v=rpkeBZHrXVQ&t=2s).</p>

<iframe width="500" height="281" src="https://www.youtube.com/embed/rpkeBZHrXVQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<p align="justify">Im Drucklayout können Attributinformationen entweder als Labels oder in einer Kartenlegende angezeigt werden. Die Legende erhält einen frei wählbaren Titel. Das Layout und die Elementeigenschaften können im Bedienfeld rechts neben der Karte angepasst werden. Das Einfügen einer Legende empfiehlt sich bei besonders dichten Kartenbildern mit umfangreichen Beschriftungen.</p>

<img alt="Screenshot 8: Legende im Drucklayout erstellen" src="./QGIS_Screenshot8_Legende.png">

<p align="justify">Die QGIS-Dokumentation beschreibt diesen Schritt ausführlicher in <a href="https://docs.qgis.org/3.4/en/docs/training_manual/map_composer/map_composer.html">Lektion 5.1</a>. Außerdem lohnt es sich auch in diesem Fall, Fragen und Antworten der GIS-Community auf <a href="https://gis.stackexchange.com/">GIS Stackexchange</a> nachzulesen oder selbst eine Frage zu diesem Thema zu stellen.</p>
