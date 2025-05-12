<h3>Anleitung für die Arbeit mit Google Colab<\h3>
  
  <h4>Ordner auf Google Drive erstellen</h4>

Bitte auf eurem Google Drive einen Ordner erstellen, der Colab_Geohumanities oder so ähnlich heißen sollte. Es ist wichtig einen eindeutigen und zugleich möglichst kurzen Namen zu wählen.
Die Ablage auf der obersten Ebene von Google Drive ist empfohlen, um den Ordner leichter in Skripte einzubinden.

  Im gleichen Ordner sollten auch alle benötigten Skripte abgelegt werden, zum Beispiel:

Geocoding mit Google: https://github.com/ieg-dhr/DigiKAR/blob/main/JupyterNotebooks_DigiKAR/Geocode_Plot_GoogleAPI_interactiveMAP_AP3.ipynb
Geocoding mit Geonames: https://github.com/ieg-dhr/DigiKAR/blob/main/JupyterNotebooks_DigiKAR/Geocode-Plot_Geonames_interactiveMAP.ipynb

  <h4>Dateien in Colab ausführen</h4>
  
Code-Datei auswählen und in mit Rechtsklick „öffnen mit“ wählen, um dann Colaboratory/Colab auszuwählen. Man muss bestätigen, dass Code aus einer fremden Quelle (z.B. von Monika Barget) ausgeführt werden darf.

  <h4>Im Skript Dateipfade und API Keys ändern</h4>

  Im Skript muss man als Input den Pfad der Datei festlegen, die geocodiert werden soll.
  Diese Datei kann entweder in einem externen Github Repositorium liegen, oder aus dem eigenen Google-Ordner ausgelesen werden.

Dies muss in den Skripten an dieser Stelle angezeigt werden:

infile=https://github.com/MonikaBarget/GeoHumTutorials/blob/master/Colab_Geocoding/Addresses_AP3.xlsx?raw=true # für Github Link

ODER:

infile=directory+"xxxxx.xlsx"  # für Daten aus dem eigenen Ordner

Die Zeile, die ihr NICHT braucht, bitte löschen oder mit # zu Beginn der Zeile deaktivieren! Code speichern!
 
Je nach Skript muss ggf. auch ein API-Key eingetragen werden.
  
  <h4>Code mit eigenen Daten ausführen</h4>

Der eigentliche Code befindet sich jeweils in grauen Kästen mit Play Buttons auf der Linken Seite. Die grau hinterlegten Felder müssen nacheinander zum Laufen gebracht werden, indem man links auf den kleinen Kasten mit dem Play-Button klickt. Beim ersten Start muss Colab Zugriff auf den Google-Drive erlaubt werden.
Ausgeführter Code sollte dann einen kleinen grünen Haken erhalten. Erst dann kann der nächste Schritt erfolgen. Falls eine Fehlermeldung auftaucht, kann man sich u.a. in Tech-Foren informieren, was diese bedeutet. Meist haben Fehlermeldungen einen endeutigen Namen wie KeyError oder ValueError und manchmal auch eine Zahl.
Danach folgt eine Beschreibung mit einem genauen Hinweis, an welcher Stelle im Skript der Code aufgetreten ist.
