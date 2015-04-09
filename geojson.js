
function popUpName(feature, layer) {
	// does this feature have a property named popupContent?
	if (feature.properties && feature.properties.Name) {
		layer.bindPopup(feature.properties.Name);
	}
	
	jQuery(document).ready(function(){
		var map = L.map('map').setView([40.283677, -3.821508], 16);
   // Add a MapQuest map
   L.tileLayer('http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.png', {
   	attribution: 'Tiles Courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">'
   }).addTo(map);
       // Add to map a layer with all points in buildings-urjc.json
       $.getJSON("buildings-urjc.json", function(data) {
       	buildingsLayer = L.geoJson(data, {
       		onEachFeature: popUpName
       	}).addTo(map);
       });

   });
}
