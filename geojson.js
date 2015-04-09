var map = L.map('map').setView([40.283677, -3.821508], 16);

jQuery(document).ready(function(){
	$.getJSON( "buildings-urjc.json", function( data ){
		var geojsonFeature = data;	
		L.geoJson(geojsonFeature).addTo(map);
	})

});