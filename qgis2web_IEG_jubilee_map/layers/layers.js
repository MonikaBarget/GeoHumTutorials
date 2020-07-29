var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1 = new ol.format.GeoJSON();
var features_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1 = format_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.readFeatures(json_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.addFeatures(features_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1);
var lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1, 
                style: style_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1,
                interactive: false,
                title: '<img src="styles/legend/MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.png" /> Max-Planck-Institute (vormals Kaiser-Wilhelm-Institute)'
            });
var format_NaturwissenschaftenLandwirtschaftGeowissenschaften_2 = new ol.format.GeoJSON();
var features_NaturwissenschaftenLandwirtschaftGeowissenschaften_2 = format_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.readFeatures(json_NaturwissenschaftenLandwirtschaftGeowissenschaften_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NaturwissenschaftenLandwirtschaftGeowissenschaften_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.addFeatures(features_NaturwissenschaftenLandwirtschaftGeowissenschaften_2);
var lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NaturwissenschaftenLandwirtschaftGeowissenschaften_2, 
                style: style_NaturwissenschaftenLandwirtschaftGeowissenschaften_2,
                interactive: false,
                title: '<img src="styles/legend/NaturwissenschaftenLandwirtschaftGeowissenschaften_2.png" /> Naturwissenschaften, Landwirtschaft, Geowissenschaften'
            });
var format_Museen_3 = new ol.format.GeoJSON();
var features_Museen_3 = format_Museen_3.readFeatures(json_Museen_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Museen_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Museen_3.addFeatures(features_Museen_3);
var lyr_Museen_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Museen_3, 
                style: style_Museen_3,
                interactive: false,
                title: '<img src="styles/legend/Museen_3.png" /> Museen'
            });
var format_SonstigeForschungsinstitute_4 = new ol.format.GeoJSON();
var features_SonstigeForschungsinstitute_4 = format_SonstigeForschungsinstitute_4.readFeatures(json_SonstigeForschungsinstitute_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SonstigeForschungsinstitute_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SonstigeForschungsinstitute_4.addFeatures(features_SonstigeForschungsinstitute_4);
var lyr_SonstigeForschungsinstitute_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SonstigeForschungsinstitute_4, 
                style: style_SonstigeForschungsinstitute_4,
                interactive: false,
                title: '<img src="styles/legend/SonstigeForschungsinstitute_4.png" /> Geisteswissenschaften / Wirtschaft / Forschung allgemein'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.setVisible(true);lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.setVisible(true);lyr_Museen_3.setVisible(true);lyr_SonstigeForschungsinstitute_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1,lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2,lyr_Museen_3,lyr_SonstigeForschungsinstitute_4];
lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.set('fieldAliases', {'label': 'label', 'institute': 'institute', 'place': 'place', 'mix': 'mix', });
lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.set('fieldAliases', {'label': 'label', 'institute': 'institute', 'place': 'place', 'mix': 'mix', });
lyr_Museen_3.set('fieldAliases', {'label': 'label', 'institute': 'institute', 'place': 'place', 'mix': 'mix', 'Geisteswissenschaft': 'Geisteswissenschaft', });
lyr_SonstigeForschungsinstitute_4.set('fieldAliases', {'label': 'label', 'institute': 'institute', 'place': 'place', 'mix': 'mix', });
lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.set('fieldImages', {'label': 'TextEdit', 'institute': 'TextEdit', 'place': 'TextEdit', 'mix': 'TextEdit', });
lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.set('fieldImages', {'label': 'TextEdit', 'institute': 'TextEdit', 'place': 'TextEdit', 'mix': 'TextEdit', });
lyr_Museen_3.set('fieldImages', {'label': 'TextEdit', 'institute': 'TextEdit', 'place': 'TextEdit', 'mix': 'TextEdit', 'Geisteswissenschaft': 'TextEdit', });
lyr_SonstigeForschungsinstitute_4.set('fieldImages', {'label': 'TextEdit', 'institute': 'TextEdit', 'place': 'TextEdit', 'mix': 'TextEdit', });
lyr_MaxPlanckInstitutevormalsKaiserWilhelmInstitute_1.set('fieldLabels', {'marker-color': 'no label', 'marker-size': 'no label', 'marker-symbol': 'no label', 'label': 'inline label', 'institute': 'inline label', 'place': 'inline label', 'mix': 'no label', });
lyr_NaturwissenschaftenLandwirtschaftGeowissenschaften_2.set('fieldLabels', {'marker-color': 'no label', 'marker-size': 'no label', 'marker-symbol': 'no label', 'label': 'inline label', 'institute': 'inline label', 'place': 'inline label', 'mix': 'no label', });
lyr_Museen_3.set('fieldLabels', {'marker-color': 'no label', 'marker-size': 'no label', 'marker-symbol': 'no label', 'label': 'inline label', 'institute': 'inline label', 'place': 'inline label', 'mix': 'no label', 'Geisteswissenschaft': 'no label', });
lyr_SonstigeForschungsinstitute_4.set('fieldLabels', {'marker-color': 'no label', 'marker-size': 'no label', 'marker-symbol': 'no label', 'label': 'inline label', 'institute': 'inline label', 'place': 'inline label', 'mix': 'no label', });
lyr_SonstigeForschungsinstitute_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
