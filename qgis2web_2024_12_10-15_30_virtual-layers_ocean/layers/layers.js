var wms_layers = [];


        var lyr_ESRIOcean_0 = new ol.layer.Tile({
            'title': 'ESRI Ocean',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Ocean/World_Ocean_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RKG_virtuallayer_assessor_presentatus_1 = new ol.format.GeoJSON();
var features_RKG_virtuallayer_assessor_presentatus_1 = format_RKG_virtuallayer_assessor_presentatus_1.readFeatures(json_RKG_virtuallayer_assessor_presentatus_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKG_virtuallayer_assessor_presentatus_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKG_virtuallayer_assessor_presentatus_1.addFeatures(features_RKG_virtuallayer_assessor_presentatus_1);cluster_RKG_virtuallayer_assessor_presentatus_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RKG_virtuallayer_assessor_presentatus_1
});
var lyr_RKG_virtuallayer_assessor_presentatus_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RKG_virtuallayer_assessor_presentatus_1, 
                style: style_RKG_virtuallayer_assessor_presentatus_1,
                popuplayertitle: "RKG_virtual-layer_assessor_presentatus",
                interactive: true,
                title: '<img src="styles/legend/RKG_virtuallayer_assessor_presentatus_1.png" /> RKG_virtual-layer_assessor_presentatus'
            });
var format_RKG_virtuallayer_absolvent_student_2 = new ol.format.GeoJSON();
var features_RKG_virtuallayer_absolvent_student_2 = format_RKG_virtuallayer_absolvent_student_2.readFeatures(json_RKG_virtuallayer_absolvent_student_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKG_virtuallayer_absolvent_student_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKG_virtuallayer_absolvent_student_2.addFeatures(features_RKG_virtuallayer_absolvent_student_2);cluster_RKG_virtuallayer_absolvent_student_2 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RKG_virtuallayer_absolvent_student_2
});
var lyr_RKG_virtuallayer_absolvent_student_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RKG_virtuallayer_absolvent_student_2, 
                style: style_RKG_virtuallayer_absolvent_student_2,
                popuplayertitle: "RKG_virtual-layer_absolvent_student",
                interactive: true,
                title: '<img src="styles/legend/RKG_virtuallayer_absolvent_student_2.png" /> RKG_virtual-layer_absolvent_student'
            });
var format_RKG_virtuallayer_rat_3 = new ol.format.GeoJSON();
var features_RKG_virtuallayer_rat_3 = format_RKG_virtuallayer_rat_3.readFeatures(json_RKG_virtuallayer_rat_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKG_virtuallayer_rat_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKG_virtuallayer_rat_3.addFeatures(features_RKG_virtuallayer_rat_3);cluster_RKG_virtuallayer_rat_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RKG_virtuallayer_rat_3
});
var lyr_RKG_virtuallayer_rat_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RKG_virtuallayer_rat_3, 
                style: style_RKG_virtuallayer_rat_3,
                popuplayertitle: "RKG_virtual-layer_rat",
                interactive: true,
                title: '<img src="styles/legend/RKG_virtuallayer_rat_3.png" /> RKG_virtual-layer_rat'
            });

lyr_ESRIOcean_0.setVisible(true);lyr_RKG_virtuallayer_assessor_presentatus_1.setVisible(true);lyr_RKG_virtuallayer_absolvent_student_2.setVisible(true);lyr_RKG_virtuallayer_rat_3.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_RKG_virtuallayer_assessor_presentatus_1,lyr_RKG_virtuallayer_absolvent_student_2,lyr_RKG_virtuallayer_rat_3];
lyr_RKG_virtuallayer_assessor_presentatus_1.set('fieldAliases', {'event_date': 'event_date', 'event_date_after': 'event_date_after', 'event_date_before': 'event_date_before', 'event_date_end': 'event_date_end', 'event_date_start': 'event_date_start', 'event_end': 'event_end', 'event_start': 'event_start', 'event_type': 'event_type', 'institution_name': 'institution_name', 'person_function': 'person_function', 'person_name': 'person_name', 'person_title': 'person_title', 'latitude': 'latitude', 'longitude': 'longitude', 'place_name': 'place_name', 'place_type': 'place_type', });
lyr_RKG_virtuallayer_absolvent_student_2.set('fieldAliases', {'event_date': 'event_date', 'event_date_after': 'event_date_after', 'event_date_before': 'event_date_before', 'event_date_end': 'event_date_end', 'event_date_start': 'event_date_start', 'event_end': 'event_end', 'event_start': 'event_start', 'event_type': 'event_type', 'institution_name': 'institution_name', 'person_function': 'person_function', 'person_name': 'person_name', 'person_title': 'person_title', 'latitude': 'latitude', 'longitude': 'longitude', 'place_name': 'place_name', 'place_type': 'place_type', });
lyr_RKG_virtuallayer_rat_3.set('fieldAliases', {'event_date': 'event_date', 'event_date_after': 'event_date_after', 'event_date_before': 'event_date_before', 'event_date_end': 'event_date_end', 'event_date_start': 'event_date_start', 'event_end': 'event_end', 'event_start': 'event_start', 'event_type': 'event_type', 'institution_name': 'institution_name', 'person_function': 'person_function', 'person_name': 'person_name', 'person_title': 'person_title', 'latitude': 'latitude', 'longitude': 'longitude', 'place_name': 'place_name', 'place_type': 'place_type', });
lyr_RKG_virtuallayer_assessor_presentatus_1.set('fieldImages', {'event_date': 'TextEdit', 'event_date_after': 'TextEdit', 'event_date_before': 'TextEdit', 'event_date_end': 'TextEdit', 'event_date_start': 'TextEdit', 'event_end': 'TextEdit', 'event_start': 'TextEdit', 'event_type': 'TextEdit', 'institution_name': 'TextEdit', 'person_function': 'TextEdit', 'person_name': 'TextEdit', 'person_title': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'place_name': 'TextEdit', 'place_type': 'TextEdit', });
lyr_RKG_virtuallayer_absolvent_student_2.set('fieldImages', {'event_date': '', 'event_date_after': '', 'event_date_before': '', 'event_date_end': '', 'event_date_start': '', 'event_end': '', 'event_start': '', 'event_type': '', 'institution_name': '', 'person_function': '', 'person_name': '', 'person_title': '', 'latitude': '', 'longitude': '', 'place_name': '', 'place_type': '', });
lyr_RKG_virtuallayer_rat_3.set('fieldImages', {'event_date': '', 'event_date_after': '', 'event_date_before': '', 'event_date_end': '', 'event_date_start': '', 'event_end': '', 'event_start': '', 'event_type': '', 'institution_name': '', 'person_function': '', 'person_name': '', 'person_title': '', 'latitude': '', 'longitude': '', 'place_name': '', 'place_type': '', });
lyr_RKG_virtuallayer_assessor_presentatus_1.set('fieldLabels', {'event_date': 'header label - visible with data', 'event_date_after': 'header label - visible with data', 'event_date_before': 'header label - visible with data', 'event_date_end': 'header label - visible with data', 'event_date_start': 'header label - visible with data', 'event_end': 'header label - visible with data', 'event_start': 'header label - visible with data', 'event_type': 'header label - visible with data', 'institution_name': 'header label - visible with data', 'person_function': 'header label - visible with data', 'person_name': 'header label - visible with data', 'person_title': 'header label - visible with data', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'place_name': 'header label - visible with data', 'place_type': 'header label - visible with data', });
lyr_RKG_virtuallayer_absolvent_student_2.set('fieldLabels', {'event_date': 'header label - visible with data', 'event_date_after': 'header label - visible with data', 'event_date_before': 'header label - visible with data', 'event_date_end': 'header label - visible with data', 'event_date_start': 'header label - visible with data', 'event_end': 'header label - visible with data', 'event_start': 'header label - visible with data', 'event_type': 'header label - visible with data', 'institution_name': 'header label - visible with data', 'person_function': 'header label - visible with data', 'person_name': 'header label - visible with data', 'person_title': 'header label - visible with data', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'place_name': 'header label - visible with data', 'place_type': 'header label - visible with data', });
lyr_RKG_virtuallayer_rat_3.set('fieldLabels', {'event_date': 'header label - visible with data', 'event_date_after': 'header label - visible with data', 'event_date_before': 'header label - visible with data', 'event_date_end': 'header label - visible with data', 'event_date_start': 'header label - visible with data', 'event_end': 'header label - visible with data', 'event_start': 'header label - visible with data', 'event_type': 'header label - visible with data', 'institution_name': 'header label - visible with data', 'person_function': 'header label - visible with data', 'person_name': 'header label - visible with data', 'person_title': 'header label - visible with data', 'latitude': 'header label - visible with data', 'longitude': 'header label - visible with data', 'place_name': 'header label - visible with data', 'place_type': 'header label - visible with data', });
lyr_RKG_virtuallayer_rat_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});