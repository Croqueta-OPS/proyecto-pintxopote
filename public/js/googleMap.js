var map;

function initialize() {
	
	var mapOptions = {
		zoom: 14,
		center: new google.maps.LatLng(43.3133505, -1.9782344)
	};
	
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);

}

google.maps.event.addDomListener(window, 'load', initialize);