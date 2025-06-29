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

- CSV (Comma-Separated Values): You can create a CSV file using a text editor or spreadsheet software like Microsoft Excel or LibreOffice Calc. Arrange your data in columns and rows, then save the file with a .csv extension.
- JSON (JavaScript Object Notation): If you prefer a more structured format, you can write your data in JSON format using a text editor. JSON is useful for hierarchical data and can be easily read by many programming languages.
- TXT (Plain Text): For simple data, a plain text file might suffice. You can list your data in a text file with a `.txt` extension.

A CSV structure would look like this:

```100, 200, Landmark1
150, 250, Landmark2```

In JSON format, the same data would look like this:

```[
    {"X": 100, "Y": 200, "Description": "Landmark1"},
    {"X": 150, "Y": 250, "Description": "Landmark2"}
]```

Save the file with the appropriate extension (e.g., .csv, .json, .txt).

### Script-based feature extraction

For a more automated approach, a Python script can be used to generate coordinates or grid references. You can use libraries such as Pillow (PIL) to load and process the map 
image. You can write a script to divide the image into a grid and assign each grid cell a unique identifier. Alternatively, a script can identify key features on the map and generate their coordinates. This can be done using more advanced methods like feature detection.
In Python, feature detection in images can be performed with one of the following packages:

- OpenCV (Open Source Computer Vision Library): OpenCV is one of the most widely used libraries for computer vision tasks. It provides extensive support for feature detection algorithms such as SIFT (Scale-Invariant Feature Transform), SURF (Speeded-Up Robust Features), ORB (Oriented FAST and Rotated BRIEF), and many others. OpenCV can handle various image file formats, including JPEG, PNG, TIFF, and BMP.

- scikit-image: Built on top of SciPy, scikit-image is a collection of algorithms for image processing. It supports various feature detection methods and works well with image formats like JPEG, PNG, and TIFF.

- Pillow (PIL Fork): While primarily used for opening, manipulating, and saving many different image file formats, Pillow can be used in conjunction with other libraries for basic image processing tasks. It supports a wide range of formats including JPEG, PNG, BMP, TIFF, and GIF.

- SimpleITK: This library is useful for more advanced image analysis and supports a variety of formats including those used in medical imaging like DICOM, in addition to standard formats like JPEG and PNG.

- Mahotas: A computer vision and image processing library for Python, Mahotas includes a range of features for image analysis, including some feature detection capabilities. It supports common image formats like JPEG and PNG.

When exporting data from feature detection processes, you typically save the results in formats that can be easily read and processed by other tools. Common file formats for exporting feature data include:

- CSV or TXT files: For exporting feature coordinates or descriptors in a simple tabular format.
- JSON: Useful for structured data that includes both feature coordinates and metadata.
- HDF5: Useful for storing large datasets, including image data and feature descriptors, especially in scientific computing contexts.
- NumPy files (.npy or .npz): For storing numerical data efficiently, especially when working within the Python ecosystem.
