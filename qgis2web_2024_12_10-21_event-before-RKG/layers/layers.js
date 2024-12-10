var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIGraydark_1 = new ol.layer.Tile({
            'title': 'ESRI Gray (dark)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIOcean_2 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_StationvorRKG_3 = new ol.format.GeoJSON();
var features_StationvorRKG_3 = format_StationvorRKG_3.readFeatures(json_StationvorRKG_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationvorRKG_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationvorRKG_3.addFeatures(features_StationvorRKG_3);
var lyr_StationvorRKG_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationvorRKG_3, 
                style: style_StationvorRKG_3,
                popuplayertitle: "Station vor RKG",
                interactive: true,
                title: '<img src="styles/legend/StationvorRKG_3.png" /> Station vor RKG'
            });
var format_StationenRKG_4 = new ol.format.GeoJSON();
var features_StationenRKG_4 = format_StationenRKG_4.readFeatures(json_StationenRKG_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StationenRKG_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StationenRKG_4.addFeatures(features_StationenRKG_4);
var lyr_StationenRKG_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StationenRKG_4, 
                style: style_StationenRKG_4,
                popuplayertitle: "Stationen RKG",
                interactive: true,
                title: '<img src="styles/legend/StationenRKG_4.png" /> Stationen RKG'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_ESRIGraydark_1.setVisible(true);lyr_ESRIOcean_2.setVisible(true);lyr_StationvorRKG_3.setVisible(true);lyr_StationenRKG_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_ESRIGraydark_1,lyr_ESRIOcean_2,lyr_StationvorRKG_3,lyr_StationenRKG_4];
lyr_StationvorRKG_3.set('fieldAliases', {'event_date': 'event_date', 'event_date_after': 'event_date_after', 'event_date_before': 'event_date_before', 'event_date_end': 'event_date_end', 'event_date_start': 'event_date_start', 'event_end': 'event_end', 'event_start': 'event_start', 'event_type': 'event_type', 'institution_name': 'institution_name', 'person_function': 'person_function', 'person_name': 'person_name', 'person_title': 'person_title', 'latitude': 'latitude', 'longitude': 'longitude', 'place_name': 'place_name', 'place_type': 'place_type', });
lyr_StationenRKG_4.set('fieldAliases', {'event_date': 'event_date', 'event_date_after': 'event_date_after', 'event_date_before': 'event_date_before', 'event_date_end': 'event_date_end', 'event_date_start': 'event_date_start', 'event_end': 'event_end', 'event_start': 'event_start', 'event_type': 'event_type', 'institution_name': 'institution_name', 'person_function': 'person_function', 'person_name': 'person_name', 'person_title': 'person_title', 'latitude': 'latitude', 'longitude': 'longitude', 'place_name': 'place_name', 'place_type': 'place_type', });
lyr_StationvorRKG_3.set('fieldImages', {'event_date': 'TextEdit', 'event_date_after': 'TextEdit', 'event_date_before': 'TextEdit', 'event_date_end': 'TextEdit', 'event_date_start': 'TextEdit', 'event_end': 'TextEdit', 'event_start': 'TextEdit', 'event_type': 'TextEdit', 'institution_name': 'TextEdit', 'person_function': 'TextEdit', 'person_name': 'TextEdit', 'person_title': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'place_name': 'TextEdit', 'place_type': 'TextEdit', });
lyr_StationenRKG_4.set('fieldImages', {'event_date': 'TextEdit', 'event_date_after': 'TextEdit', 'event_date_before': 'TextEdit', 'event_date_end': 'TextEdit', 'event_date_start': 'TextEdit', 'event_end': 'TextEdit', 'event_start': 'TextEdit', 'event_type': 'TextEdit', 'institution_name': 'TextEdit', 'person_function': 'TextEdit', 'person_name': 'TextEdit', 'person_title': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'place_name': 'TextEdit', 'place_type': 'TextEdit', });
lyr_StationvorRKG_3.set('fieldLabels', {'event_date': 'no label', 'event_date_after': 'no label', 'event_date_before': 'no label', 'event_date_end': 'no label', 'event_date_start': 'no label', 'event_end': 'no label', 'event_start': 'no label', 'event_type': 'no label', 'institution_name': 'no label', 'person_function': 'no label', 'person_name': 'no label', 'person_title': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'place_name': 'no label', 'place_type': 'no label', });
lyr_StationenRKG_4.set('fieldLabels', {'event_date': 'no label', 'event_date_after': 'no label', 'event_date_before': 'no label', 'event_date_end': 'no label', 'event_date_start': 'no label', 'event_end': 'no label', 'event_start': 'no label', 'event_type': 'no label', 'institution_name': 'no label', 'person_function': 'no label', 'person_name': 'no label', 'person_title': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'place_name': 'no label', 'place_type': 'no label', });
lyr_StationenRKG_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});