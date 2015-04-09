var map = L.map('map').setView([40.283677, -3.821508], 16);

jQuery(document).ready(function(){
	$.getJSON( "buildings-urjc.json", function( data ){
		L.geoJson(data).addTo(map);
	})

});