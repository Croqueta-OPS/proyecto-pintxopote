$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/bares",
		dataType: "json",
		success: function(data) {
			
			var directionsDisplay;
			var directionsService = new google.maps.DirectionsService();
			var map;

			function initialize() {
				
				directionsDisplay = new google.maps.DirectionsRenderer();
				
				var mapOptions = {
					center: new google.maps.LatLng(43.3133505, -1.9782344),
			        zoom: 14,
			        mapTypeControl: false,
			        scrollwheel: false,
			        mapTypeId:google.maps.MapTypeId.ROADMAP
				};
				
				map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
				
				directionsDisplay.setMap(map);
				
				var myLatlng;
				
				data.forEach(function(element, index, array) {
				
					myLatlng = new google.maps.LatLng(element.coordX, element.coordY);
					
					var marker = new google.maps.Marker({
						position: myLatlng,
						map: map,
						title: element.nombre
					});
				
				});
				
			}
			
			function calcRoute() {
				alert("kk");
				
				var start =  'Vielha e Mijaran, Lleida';
				var end =  'La Massana, Andorra';
				
				var request = {
					origin:start,
					destination:end,
					travelMode: google.maps.TravelMode.WALKING
				};
				
				directionsService.route(request, function(response, status) {
					
					if (status == google.maps.DirectionsStatus.OK) {
						directionsDisplay.setDirections(response);
					}
				
				});
			
			}

			google.maps.event.addDomListener(window, 'load', initialize);
			calcRoute();
				
		}
				
	});         	
				
});