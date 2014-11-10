$.ajax({

	type: "GET",
	url: "/bares",
	dataType: "json",
	success: function(data){
		
	    setTimeout(function() {

    		data.forEach(function(element, index, array) {
    			
    			myLatlng = new google.maps.LatLng(element.coordX, element.coordY);
    			
    			var marker = new google.maps.Marker({
    				position: myLatlng,
    				//map : map,
    				title: element.nombre
    			});
    
    		});
    		
            function calcRoute() {
                
                var start =  new google.maps.LatLng(data[1].coordX, data[1].coordY);
                var end =  new google.maps.LatLng(data[2].coordX, data[2].coordY);
                var waypoints = [];
                
                waypoints.push({
                    location:new google.maps.LatLng(data[0].coordX, data[0].coordY),
                    stopover:true
                });
                
                var request = {
                    origin:start,
                    destination:end,
                    waypoints: waypoints,
                    travelMode: google.maps.TravelMode.WALKING
                };
                
                directionsService.route(request, function(response, status) {
                    
                    if (status == google.maps.DirectionsStatus.OK) {
                        
                        directionsDisplay.setOptions({ preserveViewport: true });
                        directionsDisplay.setDirections(response);
                        
                    }
                    
                });
            
            }
            
            calcRoute();

	    }, 1000);
		
	}

});