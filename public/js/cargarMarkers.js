$(document).ready(function() {
    
    $('#btn1, #btn2, #btn3').click(function() { 
       
        var ruta;
        
        if (this.id == "btn1") {
            ruta = "0";
        }
        else if (this.id == "btn2") {
            ruta = "1";
        }
        else {
            ruta = "3";
        }
    
        $.ajax({
        
        	type: "GET",
        	url: "/bares",
        	dataType: "json",
        	success: function(data){
        		
        	    setTimeout(function() {
        
            	/*	data.forEach(function(element, index, array) {
            			
            			myLatlng = new google.maps.LatLng(element.coordX, element.coordY);
            			
            			var marker = new google.maps.Marker({
            				position: myLatlng,
            				map : map,
            				title: element.nombre
            			});
            
            		});  */
            		
            		var arrayRuta = [];
            		
            		data.forEach(function(element, index, array) {
            		    
            		    element.rutas.forEach(function(elemen, inde, array) {
            		         
            		        if (elemen == ruta) {
            		       
                    	    	arrayRuta.push(element);
                    		
            		        }
            		    
            		    });
            		    
            		    if (ruta == "3") {
            		        arrayRuta.push(element);
            		    }
            		    
            		});
            		
                    function calcRoute() {
                        
                        var start =  new google.maps.LatLng(arrayRuta[0].coordX, arrayRuta[0].coordY);
                        var end =  new google.maps.LatLng(arrayRuta[arrayRuta.length - 1].coordX, arrayRuta[arrayRuta.length - 1].coordY);
                        var waypoints = [];
                        
                        if (arrayRuta.length > 2) {
                            waypoints.push({
                                location:new google.maps.LatLng(arrayRuta[1].coordX, arrayRuta[1].coordY),
                                stopover:true
                            });
                        }
                        
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
        
        	    }, 100);
        		
        	}
        
        });
    
    });
    
});