---
layout: default
lang: de
---

<style>
p { text-align: justify; }
.img-container { float: left; margin: 0 20px 20px 0; width: 25%; }
.img-container img { width: 100%; height: auto; }
.clearfix::after { content: ""; clear: both; display: table; }
</style>

# Erstellen und Bearbeiten von GeoJSON Dateien mit Geojson.io

<p>Für viele Geisteswissenschaftler/Innen und Mitarbeiter/Innen in der Forschungskommunikation sind Karten attraktive Werkzeuge, um räumliche Beziehungen und Entwicklungen verständlich zu machen. Allerdings fällt es oft schwer, geeignete Werkzeuge zur Kartenerstellung auszuwählen, da die Möglichkeiten klassischer Einsteigertools wie Palladio und Dariah-De Geobrowser besonders im Bereich des Exports hochwertiger Kartenbilder sehr beschränkt sind, während viele andere Werkzeuge aufwendigere Softwareinstallationen, Kenntnisse in der Arbeit mit Terminal / Kommandozeile oder sogar Erfahrung mit Programmiersprachen erfordern.</p>

<p>In diesem Tutorial möchte ich deshalb eine einfache Methode der Aufbereitung geographischer Informationen mit <a href="http://geojson.io/#map=2/20.0/0.0">Geojson.io</a> vorstellen. Geojson.io ist ein browsergestütztes Tool, das keine Installationen erfordert und die Erstellung von sog. GeoJSON-Dateien ermöglicht, die von allen gängigen GIS-Tools gelesen und in Karten verarbeitet werden können.</p>

<p>Anstatt Tabellen in Excel anzulegen, die dann mithilfe zusätzlicher Software geokodiert und exportiert werden müssen, kann man mit Geojson.io Ortsdaten direkt aus einer Karte auswählen, anreichern und in kompatiblen Formaten speichern.</p>

<div class="img-container">
  <img src="/screenshots/Screenshot1_points.png" alt="Screenshot: Punkt-Geometrien setzen">
</div>
<p class="clearfix"></p>

----

<p>Es wird dringend empfohlen, sich zu registrieren, da dann begonnene Projekte temporär im Profil gespeichert werden können. Außerdem stehen erweiterte Funktionen nur registrierten Nutzer/Innen zur Verfügung. Die Anmeldung kann z.B. über ein bereits vorhandenes Github-Profil erfolgen. Wenn man die Geojson.io-Seite öffnet, erscheint links eine auf Open Street Map beruhende Karte mit Suchfeld, in der man frei navigieren und Marker für verschiedene Geometrien (Punkte, Linien und Polygone) setzen kann. Rechts daneben erscheinen die gewählten Geometrien automatisch im GeoJSON-Format.</p>

<div class="img-container">
  <img src="/screenshots/Screenshot2_codeview_raw.png" alt="Screenshot: GeoJSON Rohdatenansicht">
</div>
<p class="clearfix"></p>

----

<p>Um die in Geojson.io erstellten Geoinformationen um weitere Attribute wie z.B. Namen oder Datumsangaben zu erweitern, kann man in der geschweiften "properties"-Klammer der GeoJSON-Datei beliebig viele "key-value-pairs", also Paare aus "Schlüssel" und "Wert", eintragen.</p>

<p>So wie in der „geometry“-Klammer automatisch <code>"type":"Point"</code> erscheint, wenn ein Punkt auf der Karte markiert wird, so kann unter "properties" z.B. <code>"label":"IEG Mainz"</code> eingetragen werden. Satzzeichen sind erlaubt, wenn sie in Anführungszeichen stehen: <code>"label":"2020: IEG, Mainz"</code></p>

<p>Wird die Information auf mehrere Attribute verteilt, lässt sie sich später leichter kategorisieren, z.B.: <code>"label":"2020: IEG, Mainz"</code>, <code>"date":"2020"</code>, <code>"place":"Mainz"</code>.</p>

<div class="img-container">
  <img src="/screenshots/Screenshot3_Geometrie%20Punkte%20mit%20Attributen.png" alt="Screenshot: Geometrien mit Attributen">
</div>
<p class="clearfix"></p>

----

<p>Ein besonders nutzerfreundliches Attributmanagement erschließt sich durch einen Doppelklick auf eine einzelne Geometrie in der Karte. Ein Kasten mit den bestehenden "Properties" erscheint, der über <code>"add row"</code> um neue Attribute erweitert werden kann. Auch die Farbe lässt sich hier in <code>"marker-color"</code> anpassen – z. B. um bearbeitete Punkte zu kennzeichnen.</p>

<p>Da die Reihenfolge der Geometrien auf der Karte nicht mit der in der GeoJSON-Datei übereinstimmen muss, hilft die Farbgebung oder Nummerierung beim Überblick.</p>

<div class="img-container">
  <img src="/screenshots/Screenshot4_Codeview_properties%20added.png" alt="Screenshot: erweiterte Properties">
</div>
<p class="clearfix"></p>

----

<div class="img-container">
  <img src="/screenshots/Screenshot5_Tabellenansicht.png" alt="Screenshot: Tabellenansicht in Geojson.io">
</div>
<p class="clearfix"></p>

----

<p>Geojson.io erlaubt die Auswahl unterschiedlicher Hintergrundkarten, z. B. ein unbeschriftetes OSM-Layout oder ein Satellitenbild.</p>

<div class="img-container">
  <img src="/screenshots/Screenshot6_OSMAnsicht.png" alt="Screenshot: OSM-Ansicht">
</div>
<p class="clearfix"></p>

----

<div class="img-container">
  <img src="/screenshots/Screenshot7_Satellitenansicht.png" alt="Screenshot: Satellitenansicht">
</div>
<p class="clearfix"></p>

----

<p>Nach jedem wesentlichen Arbeitsschritt sollte die Datei gespeichert bzw. exportiert werden (Option „save“). Für die Weiterverarbeitung in QGIS oder Mapbox muss die Datei im GeoJSON-Format gespeichert werden – nicht als CSV.</p>

<p>Wie die GeoJSON-Dateien in QGIS importiert werden, erkläre ich im Blogpost [XY](Link).</p>

<p>Ein empfehlenswertes englischsprachiges Video-Tutorial bietet Riccardo Klinger:</p>

<p><a href="https://www.youtube.com/watch?v=sPAkG7bS10o">"GeoJSON.io editing webmap data online"</a></p>

<iframe width="500" height="281" src="https://www.youtube.com/embed/sPAkG7bS10o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<p>Für weiterführende Fragen lohnt ein Blick ins Forum <a href="https://gis.stackexchange.com/">GIS Stackexchange</a>.</p>
