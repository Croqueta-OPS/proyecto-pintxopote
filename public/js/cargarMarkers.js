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
    				map : map,
    				title: element.nombre
    			});
    
    		});
		
	    }, 1000);
		
	}

});