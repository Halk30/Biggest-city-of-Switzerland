var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM подложка',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: "Граница Швейцарии",
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> Граница Швейцарии'
            });
var format_2_2 = new ol.format.GeoJSON();
var features_2_2 = format_2_2.readFeatures(json_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2_2.addFeatures(features_2_2);
var lyr_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2_2, 
                style: style_2_2,
                popuplayertitle: "Плотность населения, чел/км^2",
                interactive: true,
    title: 'Плотность населения, чел/км^2<br />\
    <img src="styles/legend/2_2_0.png" /> 3 - 260<br />\
    <img src="styles/legend/2_2_1.png" /> 260 - 1300<br />\
    <img src="styles/legend/2_2_2.png" /> 1300 - 2200<br />\
    <img src="styles/legend/2_2_3.png" /> 2200 - 3400<br />\
    <img src="styles/legend/2_2_4.png" /> 3400 - 4500<br />'
        });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: "Население, тыс. чел.",
                interactive: true,
    title: 'Население, тыс. чел.<br />\
    <img src="styles/legend/_3_0.png" /> 11184 - 43723<br />\
    <img src="styles/legend/_3_1.png" /> 43723 - 81691<br />\
    <img src="styles/legend/_3_2.png" /> 81691 - 139111<br />\
    <img src="styles/legend/_3_3.png" /> 139111 - 201741<br />\
    <img src="styles/legend/_3_4.png" /> 201741 - 434008<br />'
        });

lyr_OSM_0.setVisible(true);lyr__1.setVisible(true);lyr_2_2.setVisible(true);lyr__3.setVisible(true);
var layersList = [lyr_OSM_0,lyr__1,lyr_2_2,lyr__3];
lyr__1.set('fieldAliases', {'id': 'id', });
lyr_2_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'y': 'y', 'x': 'x', 'population': 'population', 'economic': 'economic', 'density': 'density', 'popul2': 'popul2', 'dens2': 'dens2', });
lyr__3.set('fieldAliases', {'id': 'id', 'name': 'name', 'y': 'y', 'x': 'x', 'population': 'population', 'economic': 'economic', 'density': 'density', 'popul2': 'popul2', 'dens2': 'dens2', });
lyr__1.set('fieldImages', {'id': 'TextEdit', });
lyr_2_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'population': 'TextEdit', 'economic': 'TextEdit', 'density': 'TextEdit', 'popul2': 'Range', 'dens2': 'Range', });
lyr__3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'y': 'TextEdit', 'x': 'TextEdit', 'population': 'TextEdit', 'economic': 'TextEdit', 'density': 'TextEdit', 'popul2': 'Range', 'dens2': 'Range', });
lyr__1.set('fieldLabels', {'id': 'no label', });
lyr_2_2.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'y': 'inline label - always visible', 'x': 'inline label - always visible', 'population': 'inline label - always visible', 'economic': 'header label - always visible', 'density': 'inline label - always visible', 'popul2': 'hidden field', 'dens2': 'hidden field', });
lyr__3.set('fieldLabels', {'id': 'hidden field', 'name': 'inline label - always visible', 'y': 'inline label - always visible', 'x': 'inline label - always visible', 'population': 'inline label - visible with data', 'economic': 'header label - always visible', 'density': 'inline label - always visible', 'popul2': 'hidden field', 'dens2': 'hidden field', });
lyr__3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});