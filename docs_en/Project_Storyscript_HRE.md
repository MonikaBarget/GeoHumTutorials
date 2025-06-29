## Hyptertext fiction and the exploration of historical space

Hypertext fiction, with its non-linear narrative structure, offers an engaging way to explore history.
By allowing readers to navigate through interconnected texts, hypertext fiction can mirror historical decision-making processes or alternative perceptions of event.
In the context of space and mobility, hypertext fiction can simulate the user-driven exploration of physical and conceptual spaces. The different experiences of historical agents,
e.g. their movements between places, can become easier to follow and understand through this interactive approach. Moreover, hypertext fiction can incorporate multimedia elements
such as maps and audio narrations.

## Creating historical hypertext fiction with the Storyscript engine

The [StoryScript engine](https://github.com/StrixIT/StoryScript), built with TypeScript, is one tool that can help historians and heritage professons with the creation of interactive historical explorations.
StoryScript allows you to build several types of web-based text adventures. The engine's compatibility with both web browsers and desktop applications (via Electron)
ensures that these interactive historical adventures are widely accessible.

## Integrating maps in hypertext fiction

To integrate maps into hypertext fiction, you either need to apply a grid, splitting the image into numbered sections of equal size,
or you have to provide coordinates based on the image width and height. This can be achieved either through image manipulation software like GIMP
or by using a script, e.g. written in Python.

### Grid creation or coordinate definition in GIMP

GIMP, a powerful open-source image editor, can be used to manually segment a map into a grid or define specific coordinates for interactive areas.
If you would like to use a **grid overlay**, start by opening your map in GIMP. Use the "Filters" menu to apply a grid overlay by selecting "Render" > "Pattern" > "Grid".
Customise the grid size according to your needs. This grid will help you visually segment the map into numbered sections, which can later be referenced.

Alternatively, you can perform **coordinate identification** directly in GIMP. Use the measuring tool in GIMP to note the pixel coordinates (x, y) of these locations. 
This method is useful if you want to create precise clickable areas without dividing the entire map into a grid. 
Once you have your grid or coordinates, you can export the map image and record the grid references or coordinates manually in a separate document. Using a plain text
editor is recommended. The final data should be exported in one of the following formats:

- CSV: You can create a CSV file using a text editor or spreadsheet software like Microsoft Excel or LibreOffice Calc. Arrange your data in columns and rows, then save the file with a .csv extension.
- JSON: If you prefer a more structured format, you can write your data in JSON format using a text editor. JSON is useful for hierarchical data and can be easily read by many programming languages.
- TXT: For simple data, a plain text file might suffice. You can list your data in a text file with a `.txt` extension.

A CSV structure would look like this:

```100, 200, Landmark1
150, 250, Landmark2```

In JSON format, the same data would look like this:

```[
    {"X": 100, "Y": 200, "Description": "Landmark1"},
    {"X": 150, "Y": 250, "Description": "Landmark2"}
]
```
Save the file with the appropriate extension (e.g., .csv, .json, .txt).

### Script-based feature extraction

For a more automated approach, a Python script can be used to generate coordinates or grid references. You can use libraries such as [Pillow (PIL)](https://pypi.org/project/pillow/) to load and process the map image. It supports a wide range of formats including JPEG, PNG, BMP, TIFF, and GIF. You can find a sample script using the ```.crop()``` method to split an image into four quarters, provided by Alex Liberzon, on [https://gist.github.com/alexlib/ef7df7bfdb3dba1698f4](https://gist.github.com/alexlib/ef7df7bfdb3dba1698f4).

Alternatively, you can experiment with computer vision packages (for Python or other languages) to identify key features on the map and generate their coordinates. In Python, feature detection in images can be performed with one of the following packages:

- [OpenCV](https://pypi.org/project/opencv-python/): OpenCV is one of the most widely used libraries for computer vision tasks. It provides extensive support for feature detection algorithms such as SIFT (Scale-Invariant Feature Transform), SURF (Speeded-Up Robust Features), ORB (Oriented FAST and Rotated BRIEF), and many others. OpenCV can handle various image file formats, including JPEG, PNG, TIFF, and BMP.

- [scikit-image](https://scikit-image.org/): Built on top of SciPy, scikit-image is a collection of algorithms for image processing. It supports various feature detection methods and works well with image formats like JPEG, PNG, and TIFF.

- [SimpleITK](https://simpleitk.org/): This library offers "multi-dimensional image analysis in Python, R, Java, C#, Lua, Ruby, TCL and C++". It is useful for more advanced image analysis and supports a variety of formats including those used in medical imaging like DICOM, in addition to standard formats like JPEG and PNG.

- [Mahotas](https://mahotas.readthedocs.io/en/latest/): A computer vision and image processing library for Python, Mahotas includes a range of features for image analysis, including some feature detection capabilities. It supports common image formats like JPEG and PNG.

> [!WARNING]  
> These recommendations are based on my preliminary searches for suitable packages and I have not tested any of them for the particular tasks that we require yet.

When exporting data from feature detection processes, you typically save the results in formats that can be easily read and processed by other tools. Common file formats for exporting feature data include:

- CSV or TXT files: For exporting feature coordinates or descriptors in a simple tabular format.
- JSON: Useful for structured data that includes both feature coordinates and metadata.
- HDF5: Useful for storing large datasets, including image data and feature descriptors, especially in scientific computing contexts.
- NumPy files (.npy or .npz): For storing numerical data efficiently, especially when working within the Python ecosystem.

## Maps to test narrative explorations of space

### Example 1: Map of the imperial circles of the Holy Roman Empire highlighting administrative structures (ca. 1740)

The map of the Holy Roman Empire created by Herman Moll in around 1740 show the so-called imperial circles as a key structure. The circles were relevant
for trans-regional administrative tasks such as organising imperial military defense. An interactive narrative exploration based on this map could introduce users to the largest principalities or imperial cities in each circle and help them explore unique social, cultural and political elements such as confessional allegiance.

Moll, Herman. "Holy Roman Empire Divided into Its Circles." Circa 1740. Digitised engraving. [https://commons.wikimedia.org/wiki/File:Holy_Roman_Empire_divided_into_its_Circles.jpg](https://commons.wikimedia.org/wiki/File:Holy_Roman_Empire_divided_into_its_Circles.jpg)

### Example 2: Map of the Duchy of Limburg emphasising settlement types and borders (1606/1608)

The map of the Duchy of Limburg by Ortelius focuses on different settlement types in the region but also shows borders to neighbouring territories. The complexity of spatial divisions shown here is typical of the early modern period, and using this map for interactive narrative exploration could especially address the political organisation of Europe in the 17th century.

Ortelius, Abraham. "Limbvrgensis Dvcatvs [Duchy of Limburg]", in: Theatrum Orbis Terrarum. London, 1606 (i.e. 1608?). Plate XLV.
Digitised engraving [https://commons.wikimedia.org/wiki/File:Map_of_the_Duchy_of_Limburg_by_Abraham_Ortelius.jpeg](https://commons.wikimedia.org/wiki/File:Map_of_the_Duchy_of_Limburg_by_Abraham_Ortelius.jpeg)

### Example 3: Map of Electoral Mainz focussing on places of military relevance (1791)

The map of Electoral Mainz created by von Reilly dates to the so-called "French period" in the history of Mainz. Mainz was at the time involved in the War of the First Coalition against revolutionary France. In this war, the Prussian and Austrian troops invaded France but retreated after the Battle of Valmy. This permitted the French army a counterattack. Their troops entered the Rhine the Palatinate in September 1792 and occupied Mainz in October. Owing to the on-going conflict, von Reilly's map especially highlights city fortifications and other features of military relevance. In an interactive setting, users could move between the different cities shown and learn about the fate of the places during the war. Choosing different historical characters in the beginning would even permit users to explore this history from different angles and better understand the conflicting goals and ideals.

von Reilly, Franz Johann Joseph. "Das ERZSTIFT Und KURFÜRSTENTHUM MAYNZ. Nro. 223. [The Archbishopric and Electorate of Mainz]. Digitised hand-coloured engraving. January 1, 1791. Landesarchiv Saarbrücken, Kartensammlung Hellwig Nr. 602. [https://commons.wikimedia.org/wiki/File:LASB_K_Hellwig_0602.jpg](https://commons.wikimedia.org/wiki/File:LASB_K_Hellwig_0602.jpg)
