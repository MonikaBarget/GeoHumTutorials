---
layout: default
lang: en
---

<h2>How to execute Python code in Google Colab</h2>

Google Colab is a browser-based application for writing and executing code. It does not require you to install Python or individual packages on your local machine.
This is why it is particularly handy for first-time users of Python and for people with less powerful computers.

<h3>Sign up for Google Drive to use COLAB</h3>

To be able to use Colab, you will need a Google account. If you do not have one or do not want to use your own, please sign up for a dummy address. Of course, GOOGLE is a proprietary service and not GDPR-compliant, so do not bring data that contain personal information, e.g. customer names, phone numbers or private mail addresses. In the future, I will be able to offer workshops using the university DSRI or a code-hosting platform provided by The Plant.

<h3>Create a folder for your code and data</h3>

On the <bold>Google Drive</bold> you will use for the workshop, please set up a new folder that is called <em>Colab_Geocoding</em> or has your project name in it. 
Make sure you can always easily find that folder again. It should be on the top level of the Drive, so do not hide it in other folders, otherwise it may be difficult for you to link it in the script.
You store your EXCEL or CSV tables with data in the folder, but make sure that those files are not converted to a Google sheet. 
The original file ending needs to be preserved. In addition to the sample data, you must put your geocoding scripts into that same folder. 

<h3>Adding the correct file path to your script</h3>

Whenever you upload files to your Google Drive on the top level, the standard path is <code>"/content/drive/My Drive/"</code>. 
Any subfolders you create will have to be linked as <code>"/content/drive/My Drive/YourFolder/"</code>. 
Please make sure to change all instances of file paths in scripts you download from Github according to this pattern. 

Similarly, participants of my workshops who have direct access to one of my Google Drive Colabs should copy that folder to create their own instance and also change file paths where necessary.</p>

<p align="justify">This German screenshot summarises the workflow for copying a shared Colab folder to your own Drive:</p>
  
<img alt="how to connect Colab DE" src="./PNG_Geodata_DE/GeocodePythonDE.png">

<h3>Executing code in Colab</h3>

<p align="justify">Code provided in Colab mostly comes in Jupyter Notebook format and combines the actual code with explanations. The explanations are meant for the user but are not part of the actual script.
The code that can be executed normally has a grey background and a little "play" button in the top-left corner. Each section of code has to be run one after the other. A green arrow on the left hand side indicates if a section of code has been executed correctly. Please see the instructions in the screenshorts below.</p>

<img alt="run COLAB" src="./PNG_Geodata_DE/RunCOLAB.png">
