ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32632").setExtent([657210.607804, 614167.331451, 692535.164166, 641343.690145]);
var wms_layers = [];

var format_Savaneherbeuse_0 = new ol.format.GeoJSON();
var features_Savaneherbeuse_0 = format_Savaneherbeuse_0.readFeatures(json_Savaneherbeuse_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Savaneherbeuse_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Savaneherbeuse_0.addFeatures(features_Savaneherbeuse_0);
var lyr_Savaneherbeuse_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Savaneherbeuse_0, 
                style: style_Savaneherbeuse_0,
                interactive: true,
                title: '<img src="styles/legend/Savaneherbeuse_0.png" /> Savane herbeuse'
            });
var format_Savanearbore_1 = new ol.format.GeoJSON();
var features_Savanearbore_1 = format_Savanearbore_1.readFeatures(json_Savanearbore_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Savanearbore_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Savanearbore_1.addFeatures(features_Savanearbore_1);
var lyr_Savanearbore_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Savanearbore_1, 
                style: style_Savanearbore_1,
                interactive: true,
                title: '<img src="styles/legend/Savanearbore_1.png" /> Savane arborée'
            });
var format_Reliqueforestire_2 = new ol.format.GeoJSON();
var features_Reliqueforestire_2 = format_Reliqueforestire_2.readFeatures(json_Reliqueforestire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Reliqueforestire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reliqueforestire_2.addFeatures(features_Reliqueforestire_2);
var lyr_Reliqueforestire_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reliqueforestire_2, 
                style: style_Reliqueforestire_2,
                interactive: true,
                title: '<img src="styles/legend/Reliqueforestire_2.png" /> Relique forestière'
            });
var format_Hydrographique_3 = new ol.format.GeoJSON();
var features_Hydrographique_3 = format_Hydrographique_3.readFeatures(json_Hydrographique_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Hydrographique_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrographique_3.addFeatures(features_Hydrographique_3);
var lyr_Hydrographique_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydrographique_3, 
                style: style_Hydrographique_3,
                interactive: true,
                title: '<img src="styles/legend/Hydrographique_3.png" /> Hydrographique'
            });
var format_Galerieforestire_4 = new ol.format.GeoJSON();
var features_Galerieforestire_4 = format_Galerieforestire_4.readFeatures(json_Galerieforestire_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Galerieforestire_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galerieforestire_4.addFeatures(features_Galerieforestire_4);
var lyr_Galerieforestire_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Galerieforestire_4, 
                style: style_Galerieforestire_4,
                interactive: true,
                title: '<img src="styles/legend/Galerieforestire_4.png" /> Galerie forestière'
            });
var format_Bti_5 = new ol.format.GeoJSON();
var features_Bti_5 = format_Bti_5.readFeatures(json_Bti_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Bti_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bti_5.addFeatures(features_Bti_5);
var lyr_Bti_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bti_5, 
                style: style_Bti_5,
                interactive: true,
                title: '<img src="styles/legend/Bti_5.png" /> Bâti'
            });
var format_Zoneagricole_6 = new ol.format.GeoJSON();
var features_Zoneagricole_6 = format_Zoneagricole_6.readFeatures(json_Zoneagricole_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_Zoneagricole_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneagricole_6.addFeatures(features_Zoneagricole_6);
var lyr_Zoneagricole_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneagricole_6, 
                style: style_Zoneagricole_6,
                interactive: true,
                title: '<img src="styles/legend/Zoneagricole_6.png" /> Zone agricole'
            });

lyr_Savaneherbeuse_0.setVisible(true);lyr_Savanearbore_1.setVisible(true);lyr_Reliqueforestire_2.setVisible(true);lyr_Hydrographique_3.setVisible(true);lyr_Galerieforestire_4.setVisible(true);lyr_Bti_5.setVisible(true);lyr_Zoneagricole_6.setVisible(true);
var layersList = [lyr_Savaneherbeuse_0,lyr_Savanearbore_1,lyr_Reliqueforestire_2,lyr_Hydrographique_3,lyr_Galerieforestire_4,lyr_Bti_5,lyr_Zoneagricole_6];
lyr_Savaneherbeuse_0.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Savanearbore_1.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Reliqueforestire_2.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Hydrographique_3.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Galerieforestire_4.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Bti_5.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Zoneagricole_6.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Savaneherbeuse_0.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Savanearbore_1.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Reliqueforestire_2.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Hydrographique_3.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Galerieforestire_4.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Bti_5.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Zoneagricole_6.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Savaneherbeuse_0.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Savanearbore_1.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Reliqueforestire_2.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Hydrographique_3.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Galerieforestire_4.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Bti_5.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Zoneagricole_6.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Zoneagricole_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});