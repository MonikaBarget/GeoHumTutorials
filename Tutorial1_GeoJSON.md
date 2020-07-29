Als Ergänzung zur [Einführung in die Erstellung von GeoJSON-Dateien](Link zum Post) beschäftigt sich der heutige Blogbeitrag mit der Visualisierung dieser Geodaten im Open Source Geoinformationssystem [QGIS](https://www.qgis.org/en/site/).

QGIS erfordert eine Installation auf der Festplatte und ist daher nur für Nutzer*innen geeignet, die auf Ihren Computern Administratorenrechte haben. Andernfalls kann für die Erstellung von Karten, die sich auf für den Druck eignen, die browserbasierte Plattform [Mapbox](https://www.mapbox.com/) verwendet werden, die in der Anwendung allerdings weniger intuitiv ist.

Die Nutzeroberfläche von QGIS erinnert an Bildbearbeitungsprogramme und ermöglicht sowohl den Import standardisierter geographischer Daten aus verschiedenen Quellen, als auch deren Darstellung auf unterschiedlichen Hintergrundkarten. Für die meisten Hintergrundkarten sind allerdings (gewerbliche) Nutzungrechte erforderlich.

Eine kostenfreie Basiskarte ist die Standardkarte von Open Street Map, die in QGIS über den "Web" Reiter geladen werden kann.

![Screenshot 1: Basiskarte öffnen](https://pad.gwdg.de/uploads/upload_d8ae223f5b2223b760c37f84731c2fe1.png)

![Screenshot 2: Ansicht der OSM Basiskarte als Layer](https://pad.gwdg.de/uploads/upload_7480da65ed4d463006ef96df521de6c7.png)

Die zuvor vorbereiteten GeoJSON-Dateien werden über "Layer hinzufügen" als neue Vektorlayer integriert.

![Screenshot 3: Vektorlayer hinzufügen](https://pad.gwdg.de/uploads/upload_5629188d99e33c1fabfc347346f20bef.png)

Hier ist es wichtig, für die Hintergrundkarte und alle Datenebenen eine passende geographische Projektion ("KBS setzen") zu wählen, damit die Ortsdaten in der richtigen Relation zueinander abgebildet werden.

![Screenshot 4: KBS setzen](https://pad.gwdg.de/uploads/upload_f6c0991996fc2fce7e2aa548ede1d1d5.png)

Über "Eigenschaften" kann dann die Darstellung der Datenlayer verändert werden.

Hier bietet QGIS folgende Funktionen:

    Verändern der Kartensymbole, ihrer Größe und Farbe
    Einfügen von Labels
    Maßstababhängige Sichtbarkeit von Kartenelementen
    Definition von Datenabhängigkeiten
    Datenbeschreibung
    Datenreparaturen
    3D Ansichten
    Datendiagramme
    Selektive Maskierung oder Sichtbarkeit von Symbolen
    Verwaltung von Benutzerformularen
    usw.

Für diese Funktionen gibt es ausführliche Video-Tutorials (z.B. die Reihe [QGIS 3 for Absolute Beginners](https://www.youtube.com/watch?v=kCnNWyl9qSE) von Klas Karlsson) sowie die Dokumentation auf der offiziellen QGIS-Webseite.

Für einfache Karten ist meistens die Label-Funktion besonders revelant.

![Screenshot 5: Label in "Layereigenschaften" wählen](https://pad.gwdg.de/uploads/upload_a5e4b18108a2063eac99653fdac15b68.png)

Hier kann entweder eine einzelne Beschriftung pro Kartenelement basierend auf einem bestimmten Attribut (z.B. "Name") ausgewählt oder die Beschriftung bestimmten (mathematischen) Regeln unterworfen werden. Eine ausführliche Erklärung der verschiedenen Label-Funktionen bietet [Lektion 4.2 in der QGIS Dokumentation](https://docs.qgis.org/2.14/en/docs/training_manual/vector_classification/label_tool.html).

![Screenshot 6: Darstellung einfacher Labels auf der Karte](https://pad.gwdg.de/uploads/upload_707e46505255df424e786b72b45dba32.png)

Da in QGIS erstellte Karten oft für die Veröffentlichung in wissenschaftlichen Publikationen oder auf Postern benötigt werden, ist es außerdem wichtig, sich mit den sog. "Drucklayouts" in QGIS vertraut zu machen. Die Vorbereitung bestimmter Karten oder Kartenausschnitte für den Druck ist in QGIS leider nicht ganz einfach, weshalb man sich ein entsprechendes Video-Tutorial ansehen sollte. In deutscher Sprache gibt es z.B. eine Videoserie von Marshal Mappers. Geöffnet wird ein neues Drucklayout unter "Projekt -> Neues Drucklayout".

![Screenshot 7: neues Drucklayout erstellen](https://pad.gwdg.de/uploads/upload_0094bdeab10b00201a6c7cb1a157d629.png)

Für jedes Drucklayout muss ein eindeutiger Layoutname gewählt werden. Im Drucklayout selbst muss außerdem der aktuelle Kartenausschnitt bzw. der Auschnitt, der gedruckt werden soll, separat geladen werden. Die einzelnen Arbeitsschritte erklärt z.B. das deutschsprachige Video [QGIS 3 | Tutorial | Kartenlayout Teil 1](https://www.youtube.com/watch?v=rpkeBZHrXVQ&t=2s).

<iframe width="560" height="315" src="https://www.youtube.com/embed/rpkeBZHrXVQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


Im Drucklayout können Attributinformationen entweder als Labels oder in einer Kartenlegende angezeigt werden. Die Legende erhält einen frei wählbaren Titel. Das Layout und die Elementeigenschaften können im Bedienfeld rechts neben der Karte angepasst werden. Das Einfügen einer Legende empfiehlt sich bei besonders dichten Kartenbildern mit umfangreichen Beschriftungen.

![Screenshot 8: Legende im Drucklayout erstellen](https://pad.gwdg.de/uploads/upload_f61bf99243723e343447ee7b148258c6.png)

Die QGIS-Dokumentation beschreibt diesen Schritt ausführlicher in [Lektion 5.1](https://docs.qgis.org/3.4/en/docs/training_manual/map_composer/map_composer.html).

Außerdem lohnt es sich auch in diesem Fall, Fragen und Antworten der GIS-Community auf [GIS Stackexchange](https://gis.stackexchange.com/) nachzulesen oder selbst eine Frage zu diesem Thema zu stellen.
