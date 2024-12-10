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
            popuplayertitle: "Tätigkeiten als Assessor / Präsentatus",
            interactive: true,
            title: '<img src="styles/legend/RKG_virtuallayer_assessor_presentatus_1.png" /> Tätigkeiten als Assessor / Präsentatus'
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
            popuplayertitle: "Studien und Studienabschlüsse",
            interactive: true,
            title: '<img src="styles/legend/RKG_virtuallayer_absolvent_student_2.png" /> Studien und Studienabschlüsse'
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
            popuplayertitle: "Ratstätigkeiten",
            interactive: true,
            title: '<img src="styles/legend/RKG_virtuallayer_rat_3.png" /> Ratstätigkeiten'
        });

lyr_ESRIOcean_0.setVisible(true);lyr_RKG_virtuallayer_assessor_presentatus_1.setVisible(true);lyr_RKG_virtuallayer_absolvent_student_2.setVisible(true);lyr_RKG_virtuallayer_rat_3.setVisible(true);
var layersList = [lyr_ESRIOcean_0,lyr_RKG_virtuallayer_assessor_presentatus_1,lyr_RKG_virtuallayer_absolvent_student_2,lyr_RKG_virtuallayer_rat_3];
