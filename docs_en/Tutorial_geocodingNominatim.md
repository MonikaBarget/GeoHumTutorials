## Geocoding with Nominatim

Another option for geocoding (historical) place names from a table using Python is to rely on the ´´geopy.geocoders´´ package. In my text, I tried to assign place names (like “Oxford” or “Hastings”) valid geographic coordinates for spatial analysis 
and export the data into GeoJSON. The environment used for testing was a local Jupyter Notebook installation with Python 3.9, though parts of the solution are also applicable to Google Colab with minor modifications.
The main Python packages used were `pandas` for tabular data manipulation, `geopy` (and specifically its `Nominatim` geocoder) for retrieving coordinates from place names, and optionally `folium` or `ipyleaflet` for mapping. Additional tools like `json` and `openpyxl` may be required for file input/output or Excel parsing. The geocoder was instantiated with a user agent and a longer timeout to avoid connectivity issues: `geolocator = Nominatim(user_agent="geojson_mapper", timeout=10)`.

## Challenges when writing the script

My first attempt to geocode with 'geopy' failed because of a mismatch between how data is returned from the geocoding function and how pandas expects to insert it into a DataFrame. 
The typical goal in this type of spatial enrichment task is to add two new columns, Latitude and Longitude, to a table that already contains a column of place names. 
These coordinates can then be used for mapping, further analysis, or export to a geospatial file format.
My initial approach involved using pandas’ `apply` method in combination with a function that returned a tuple of coordinates:

```
df[['Latitude', 'Longitude']] = df['Address'].apply(geocode_address).apply(pd.Series)
```

My goals was to pass each row in the 'Address' column to the `geocode_address` function, which returns a tuple, and `pd.Series` unpacks that tuple into two columns. 
However, this method failed consistently when used on real data, and all Latitude and Longitude values ended up as `NaN`. 
Debugging showed that the geocoding function was in fact returning valid coordinates. 
For example, `geocode_address("Oxford")` correctly returned a `Location` object with latitude and longitude attributes.

The problem was structural: pandas couldn't reliably unpack the information returned from the function across the full column if the return value was not perfectly consistent. 
Calling print(location) inside the geocoding function returned several problematic, only human-readable address strings such as “Oxford, Oxfordshire, England”.
The structure of the returned data needed explicit unpacking.

In the next step, I validated that `geolocator.geocode("Oxford, England")` returned a full `Location` object and that calling `.latitude` and `.longitude` directly yielded correct values. 
An alternative attempt involved wrapping the tuple in a `pd.Series` directly within the function:

```
def geocode_address(address):
    try:
        location = geolocator.geocode(f"{address}, England")
        if location:
            return pd.Series([location.latitude, location.longitude])
    except:
        pass
    return pd.Series([None, None])
```
While this seemed to offer a more pandas-native way of returning two values, it still ran into assignment problems when the results were directly set to two columns. 

### Extracting the coordinates with list comprehension

The solution that worked most reliably and transparently was to use explicit iteration with list comprehensions. This approach involved collecting all results in a temporary list and then assigning the results back to the DataFrame in two separate steps. 
The final code looked like this:

```
coords = [geocode_address(addr) for addr in df['Address']]
df['Latitude'] = [lat for lat, lon in coords]
df['Longitude'] = [lon for lat, lon in coords]
```

In this approach, the function `geocode_address` is guaranteed to return a tuple. Once the list of tuples is built, it is unpacked using two comprehensions.
