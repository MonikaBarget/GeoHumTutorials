var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_RKGdataDigiKAR_1 = new ol.format.GeoJSON();
var features_RKGdataDigiKAR_1 = format_RKGdataDigiKAR_1.readFeatures(json_RKGdataDigiKAR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RKGdataDigiKAR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RKGdataDigiKAR_1.addFeatures(features_RKGdataDigiKAR_1);cluster_RKGdataDigiKAR_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_RKGdataDigiKAR_1
});
var lyr_RKGdataDigiKAR_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_RKGdataDigiKAR_1, 
                style: style_RKGdataDigiKAR_1,
                popuplayertitle: "RKGdataDigiKAR",
                interactive: true,
                title: '<img src="styles/legend/RKGdataDigiKAR_1.png" /> RKGdataDigiKAR'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_RKGdataDigiKAR_1.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_RKGdataDigiKAR_1];
lyr_RKGdataDigiKAR_1.set('fieldAliases', {'place_name': 'place_name', 'place_geonames_address': 'place_geonames_address', });
lyr_RKGdataDigiKAR_1.set('fieldImages', {'place_name': '', 'place_geonames_address': '', });
lyr_RKGdataDigiKAR_1.set('fieldLabels', {'place_name': 'header label - always visible', 'place_geonames_address': 'no label', });
lyr_RKGdataDigiKAR_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});