$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/bares",
		dataType: "json",
		success: function(data) {
			
	

				var map;
				
				function initialize() {
					
					var mapOptions = {
						center:new google.maps.LatLng(43.3133505, -1.9782344),
				        zoom:14,
				        mapTypeControl: false,
				        scrollwheel: false,
				        mapTypeId:google.maps.MapTypeId.ROADMAP
					}
					
					var map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
					
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
					
				google.maps.event.addDomListener(window, 'load', initialize);
				
			
			
		}

	});

});