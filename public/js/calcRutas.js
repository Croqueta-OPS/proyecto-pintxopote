//Script que hace peticiones de bares al servidor, los clasifica por rutas
//e imprime en el mapa ya existente una ruta que conecta los bares de la misma

//El script se ejecuta desde la carga de página
$(document).ready(function() {
    
    //Al hacer clic sobre uno de los botones de rutas
    $('#btn1, #btn2, #btn3, #btn4, #btn5, #btn6, #btn7').click(function() {
        
        clearOverlays();
        directionsDisplay.setMap(map);
       
        //Creamos una variable ruta, que indica cual es la ruta que vamos a imprimir
        var ruta;
        
        //Damos valor a la ruta, dependiendo de cual es el botón concreto pulsado
        if (this.id == "btn1" || this.id == "btn4" || this.id == "btn7") {
            ruta = "0";
        }
        else if (this.id == "btn2" || this.id == "btn5") {
            ruta = "1";
        }
        else {
            ruta = "3";
        }
    
        $.ajax({
        
        	type: "GET",    //Indicamos que se trata de una petición GET
        	url: "/bares",  //Accediendo a bares
        	dataType: "json",   	//El tipo objeto que se espera recibir, en este caso json, un array de bares
        	
        	//Si la petición es correcta, se ejecutará el script de carga de ruta
        	success: function(data) {
        		
        		//Le damos un pequeño timeOut, que solo es necesario si queremos cargar una ruta directamente al cargar la página
        	    setTimeout(function() {
        
                                            		/*data.forEach(function(element, index, array) {
                                            			
        //Este pedazo de código es para               	myLatlng = new google.maps.LatLng(element.coordX, element.coordY);
        //poner puntos en el mapa sin rutas                                 			
                                            			var marker = new google.maps.Marker({
        //Lo guardamos por si hace falta        			position: myLatlng,
        //algún día                             			map : map,
                                            				title: element.nombre
                                            			});
                                            
                                            		});*/
            		
            		
            		//Creamos un array vacío
            		var arrayRuta = [];
            		
            		//Por cada elemento recogido en "data"
            		data.forEach(function(element, index, array) {
            		    
            		    //Por cada elemento "ruta" del elemento bar (en la BBDD, cada bar tiene un array de las rutas donde aparece)
            		    element.rutas.forEach(function(elemen, inde, array) {
            		        
            		        //Si en el array de rutas aparece la ruta que queremos imprimir 
            		        if (elemen == ruta) {
            		       
            		            //Metemos en nuestro nuevo array el bar
                    	    	arrayRuta.push(element);
                    		
            		        }
            		    
            		    });
            		    
            		    //De momento, la ruta 3 es la que contiene todos los bares, aunque en la BBDD ninguno esté en la 3
            		    if (ruta == "3") {
            		        arrayRuta.push(element);
            		    }
            		    
            		});
            		
            		
            		//Función que calculará la ruta
                    function calcRoute() {
                        
                        //Creamos una variable start, con las coordenadas del primer bar de nuestra ruta
                        var start =  new google.maps.LatLng(arrayRuta[0].coordX, arrayRuta[0].coordY);
                        
                        //Creamos una variable end, con las coordenadas del último bar de nuestra ruta
                        var end =  new google.maps.LatLng(arrayRuta[arrayRuta.length - 1].coordX, arrayRuta[arrayRuta.length - 1].coordY);
                        
                        //Creamos un array vacío de waypoints
                        var waypoints = [];
                        
                        //Si la ruta tiene más de 2 bares, metemos todos los centrales como waypoints de la ruta
                        if (arrayRuta.length > 2) {
                            
                            //Por cada elemento del array de ruta
                            arrayRuta.forEach(function(element, index, array) {
                    
                                //Si no es ni el primer bar ni el último
                                if (index != 0 && index != arrayRuta.length - 1) {
                        
                                    //Metemos en el array de waypoints el bar
                                    waypoints.push({
                                        
                                        //Le decimos que el punto se encuentra en las coordenadas del bar
                                        location:new google.maps.LatLng(arrayRuta[index].coordX, arrayRuta[index].coordY),
                                        
                                        //Y le decimos que es una parada obligatoria de la ruta
                                        stopover:true
                                        
                                    });
                                    
                                }
                                
                            });
                            
                        }
                        
                        //Creamos una variable con las opciones de la ruta
                        var request = {
                            
                            origin:start,   //Le indicamos que el origen es el primer bar
                            destination:end,    //El destino el último bar
                            waypoints: waypoints,   //Tiene que pasar por cada bar del array de waypoints
                            travelMode: google.maps.TravelMode.WALKING      //Y le decimos que queremos calcular la ruta andando
                            
                        };
                        
                        //Hacemos la peticion de ruta al servicio de Directions de Google Maps, pasandole las opciones definidas arriba
                        directionsService.route(request, function(response, status) {
                            
                            //Si todo va bien con el servicio de Google
                            if (status == google.maps.DirectionsStatus.OK) {
                                
                                //Le indicamos que no queremos que mueva el mapa al imprimir la ruta (si no, hace zoom y descoloca el mapa)
                                directionsDisplay.setOptions({ 
                                    preserveViewport: true 
                                });
                                
                                //Imprimimos la ruta en el mapa
                                directionsDisplay.setDirections(response);
                                
                            }
                            
                        });
                    
                    }
                    
                    //Llamamos al método de calcular ruta
                    calcRoute();
        
                //Este es el tiempo de timeOut que le dimos al principio, 100ms 
        	    }, 100);
        		
        	}
        
        });
    
    });
    
    
    
    
});

function borrarRuta() {
    directionsDisplay.setMap(null);
}