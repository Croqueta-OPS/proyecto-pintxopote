var map;
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	
	var mapOptions = {
		zoom: 14,
		minZoom: 14,
		scrollwheel: false,
		mapTypeControl: false,
		streetViewControl: false,
		center: new google.maps.LatLng(43.3133505, -1.9782344)
	};
	
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	directionsDisplay.setMap(map);

}

google.maps.event.addDomListener(window, 'load', initialize);