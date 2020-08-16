// initialise new map, set view to VIC
var map = L.map('map').setView([-37.4713,144.7852], 7);	
//var map = L.map('map').fitWorld();	

// basemaps, see other options at: http://leaflet-extras.github.io/leaflet-providers/preview/index.html
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

var Esri_WorldTopoMap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
	attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

var baseMaps = {
	"Open Topo Map": OpenTopoMap,
	"Esri World Topo Map": Esri_WorldTopoMap
}

Esri_WorldTopoMap.addTo(map);

// overlays


// point data, example of markers contributed by users
var p1 = L.marker([-36.9, 144.6], {icon: redIcon}).bindPopup('2020-08-16T12:47:31+00:00, Cattle, lice, 20 Hereford steers affected'),
    p2 = L.marker([-37.2, 144.1], {icon: violetIcon}).bindPopup('2020-07-06T08:16:31+00:00, Horses, hairy caterpillar, nest in stringybark'),
    p3 = L.marker([-37.3, 144.8], {icon: greenIcon}).bindPopup('2020-08-03T10:27:31+00:00, Sheep, dog attack, 3 wethers with torn wool'),
    p4 = L.marker([-37.6, 145.0], {icon: redIcon}).bindPopup('2020-07-15T09:22:31+00:00, cattle, grass tetany, 3 breeders'),
    p5 = L.marker([-37.25, 144.11], {icon: violetIcon}).bindPopup('2020-07-09T08:16:31+00:00, Horses, hairy caterpillar, 2 nests destroyed in group of bluegums');

var pointsOfInterest = L.layerGroup([p1, p2, p3, p4, p5]);

pointsOfInterest.addTo(map);

//var VicLandUse = new L.Shapefile('layers/VicLandUse.zip'); 
//var ibra7 = new L.Shapefile('layers/IBRA7_subregions.zip'); 
var NLPMU_2018 = new L.Shapefile('layers/NLPMU_2018.zip'); 


// WMS samples
//"https://geo.cerdi.edu.au/geoserver/vvg/wms?service=WMS&request=getMap&version=1.3.0#vicdem_coloured_relief_30m_rgb_3857_resaved"
// var relief_map = L.WMS.overlay('https://geo.cerdi.edu.au/geoserver/vvg/wms?service=WMS&request=getMap&version=1.3.0#vicdem_coloured_relief_30m_rgb_3857_resaved', {
//   'layers': 'vicdem_coloured_relief_30m_rgb_3857_resaved',
//   'format': 'image/png'
// })

var overlayMaps = {
	"National Landcare Program Mgt Units": NLPMU_2018,
};

//  "Sample points": pointsOfInterest,
//	"Land Use Vic": VicLandUse
//  "IBRA7 Subregions": ibra7,
//  "Relief map":relief_map


L.control.layers(baseMaps, overlayMaps).addTo(map);

function onLocationFound(e) {
    var radius = e.accuracy;
    L.marker(e.latlng).addTo(map)
        .bindPopup("You are within " + radius + " meters from this point").openPopup();

    L.circle(e.latlng, radius).addTo(map);
}

function onLocationError(e) {
    alert(e.message);
}

map.on('locationfound', onLocationFound);
map.on('locationerror', onLocationError);


// troubleshoot, sometimes it sets a huge circle
//map.locate({setView: true, maxZoom: 16});