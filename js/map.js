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

OpenTopoMap.addTo(map);


// overlays



// other data, example of markers
var p1 = L.marker([-37.1, 144.6]).bindPopup('First point of interest'),
    p2 = L.marker([-37.2, 144.7]).bindPopup('Second  point of interest'),
    p3 = L.marker([-37.3, 144.8]).bindPopup('Third point of interest'),
    p4 = L.marker([-37.4, 144.9]).bindPopup('Fourth point of interest');

var pointsOfInterest = L.layerGroup([p1, p2, p3, p4]);

//var VicLandUse = new L.Shapefile('layers/VicLandUse.zip'); 
var ibra7 = new L.Shapefile('layers/IBRA7_subregions.zip'); 
var NLPMU_2018 = new L.Shapefile('layers/NLPMU_2018.zip'); 


// WMS samples
//"https://geo.cerdi.edu.au/geoserver/vvg/wms?service=WMS&request=getMap&version=1.3.0#vicdem_coloured_relief_30m_rgb_3857_resaved"
var relief_map = L.WMS.overlay('https://geo.cerdi.edu.au/geoserver/vvg/wms?service=WMS&request=getMap&version=1.3.0#vicdem_coloured_relief_30m_rgb_3857_resaved', {
  'layers': 'vicdem_coloured_relief_30m_rgb_3857_resaved',
  'format': 'image/png'
})

var overlayMaps = {
	"Sample points": pointsOfInterest,
	"IBRA7 Subregions": ibra7,
	"National Landcare Program Mgt Units": NLPMU_2018,
	"Relief map":relief_map
};

//	"Land Use Vic": VicLandUse


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

map.locate({setView: true, maxZoom: 16});