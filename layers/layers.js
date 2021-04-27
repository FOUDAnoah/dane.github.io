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
var format_Savaneherbeuse_1 = new ol.format.GeoJSON();
var features_Savaneherbeuse_1 = format_Savaneherbeuse_1.readFeatures(json_Savaneherbeuse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Savaneherbeuse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Savaneherbeuse_1.addFeatures(features_Savaneherbeuse_1);
var lyr_Savaneherbeuse_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Savaneherbeuse_1, 
                style: style_Savaneherbeuse_1,
                interactive: true,
                title: '<img src="styles/legend/Savaneherbeuse_1.png" /> Savane herbeuse'
            });
var format_Savanearbore_2 = new ol.format.GeoJSON();
var features_Savanearbore_2 = format_Savanearbore_2.readFeatures(json_Savanearbore_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Savanearbore_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Savanearbore_2.addFeatures(features_Savanearbore_2);
var lyr_Savanearbore_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Savanearbore_2, 
                style: style_Savanearbore_2,
                interactive: true,
                title: '<img src="styles/legend/Savanearbore_2.png" /> Savane arborée'
            });
var format_Reliqueforestire_3 = new ol.format.GeoJSON();
var features_Reliqueforestire_3 = format_Reliqueforestire_3.readFeatures(json_Reliqueforestire_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Reliqueforestire_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Reliqueforestire_3.addFeatures(features_Reliqueforestire_3);
var lyr_Reliqueforestire_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Reliqueforestire_3, 
                style: style_Reliqueforestire_3,
                interactive: true,
                title: '<img src="styles/legend/Reliqueforestire_3.png" /> Relique forestière'
            });
var format_Hydrographique_4 = new ol.format.GeoJSON();
var features_Hydrographique_4 = format_Hydrographique_4.readFeatures(json_Hydrographique_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hydrographique_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hydrographique_4.addFeatures(features_Hydrographique_4);
var lyr_Hydrographique_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hydrographique_4, 
                style: style_Hydrographique_4,
                interactive: true,
                title: '<img src="styles/legend/Hydrographique_4.png" /> Hydrographique'
            });
var format_Galerieforestire_5 = new ol.format.GeoJSON();
var features_Galerieforestire_5 = format_Galerieforestire_5.readFeatures(json_Galerieforestire_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Galerieforestire_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Galerieforestire_5.addFeatures(features_Galerieforestire_5);
var lyr_Galerieforestire_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Galerieforestire_5, 
                style: style_Galerieforestire_5,
                interactive: true,
                title: '<img src="styles/legend/Galerieforestire_5.png" /> Galerie forestière'
            });
var format_Bti_6 = new ol.format.GeoJSON();
var features_Bti_6 = format_Bti_6.readFeatures(json_Bti_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bti_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bti_6.addFeatures(features_Bti_6);
var lyr_Bti_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bti_6, 
                style: style_Bti_6,
                interactive: true,
                title: '<img src="styles/legend/Bti_6.png" /> Bâti'
            });
var format_Zoneagricole_7 = new ol.format.GeoJSON();
var features_Zoneagricole_7 = format_Zoneagricole_7.readFeatures(json_Zoneagricole_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneagricole_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneagricole_7.addFeatures(features_Zoneagricole_7);
var lyr_Zoneagricole_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zoneagricole_7, 
                style: style_Zoneagricole_7,
                interactive: true,
                title: '<img src="styles/legend/Zoneagricole_7.png" /> Zone agricole'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Savaneherbeuse_1.setVisible(true);lyr_Savanearbore_2.setVisible(true);lyr_Reliqueforestire_3.setVisible(true);lyr_Hydrographique_4.setVisible(true);lyr_Galerieforestire_5.setVisible(true);lyr_Bti_6.setVisible(true);lyr_Zoneagricole_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Savaneherbeuse_1,lyr_Savanearbore_2,lyr_Reliqueforestire_3,lyr_Hydrographique_4,lyr_Galerieforestire_5,lyr_Bti_6,lyr_Zoneagricole_7];
lyr_Savaneherbeuse_1.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Savanearbore_2.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Reliqueforestire_3.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Hydrographique_4.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', });
lyr_Galerieforestire_5.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Bti_6.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Zoneagricole_7.set('fieldAliases', {'Value': 'Value', 'Red': 'Red', 'Green': 'Green', 'Blue': 'Blue', 'Opacity': 'Opacity', 'Class_Name': 'Class_Name', 'surface': 'surface', 'wikipedia': 'wikipedia', });
lyr_Savaneherbeuse_1.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Savanearbore_2.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Reliqueforestire_3.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Hydrographique_4.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', });
lyr_Galerieforestire_5.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Bti_6.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Zoneagricole_7.set('fieldImages', {'Value': 'Hidden', 'Red': 'Hidden', 'Green': 'Hidden', 'Blue': 'Hidden', 'Opacity': 'Hidden', 'Class_Name': 'TextEdit', 'surface': 'TextEdit', 'wikipedia': 'TextEdit', });
lyr_Savaneherbeuse_1.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Savanearbore_2.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Reliqueforestire_3.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Hydrographique_4.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', });
lyr_Galerieforestire_5.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Bti_6.set('fieldLabels', {'Class_Name': 'header label', 'surface': 'no label', 'wikipedia': 'no label', });
lyr_Zoneagricole_7.set('fieldLabels', {'Class_Name': 'no label', 'surface': 'no label', 'wikipedia': 'header label', });
lyr_Zoneagricole_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});