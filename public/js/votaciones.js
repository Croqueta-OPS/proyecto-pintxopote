$(window).load(function() {
    
    var logueado = $('#btnUsuario').attr('class');
            
            if(logueado=='visible'){
                
                $( ".ratings_stars" ).click(function() {
                    
                    var ident = $(this).attr("id").substring(0, $(this).attr("id").length - 1);//guardamos el ID del pintxo en la variable
                    var puntos = $(this).attr("value");//guardamos el valor del voto
                    
                    var cantPuntos = $(this).siblings(".votos").children("div.total_puntos").attr("value");//guardamos los puntos totales que tiene ese pintxo
                    var votos = $(this).siblings(".votos").children("div.total_votes").attr("value");//guardamos el total de los votos
                    var media = $(this).siblings(".votos").children("div.media_votes").attr("value");//guardamos la media
                    
                    
                    puntos = parseInt(puntos);
                    votos = parseInt(votos);
                    media = parseInt(media);
                    nuevosPuntos = parseInt(nuevosPuntos);
                    cantPuntos = parseInt(cantPuntos);
                    
                    var nuevosPuntos = parseInt(cantPuntos + puntos);//obtenemos los nuevos puntos
                    var nuevosVotos = parseInt(votos+1);//obtebemos la nueva cantidad de votos
                    var nuevaMedia = parseInt(nuevosPuntos/nuevosVotos);//obtenemos la nueva media
                    
                    //alert("nuevos votos:"+nuevosVotos+", nuevos puntos:"+nuevosPuntos+", nueva media:"+nuevaMedia);
                    
                    var arrayVotados = [];
                    
                    var votado = false;
                    
                	$.ajax({
	
                		type: "GET",	//Indicamos que se trata de una petición GET
                		url: "/usuarios",	//Accediendo a pintxos
                		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
                		
                		//Si la petición es correcta, se ejecutará el script de carga de datos
                		success: function(data) {
                		    
        		            data.forEach(function(element, index, array) {	
        		                
                                if (element.local.nomUsuario == document.getElementById("nomUsuario").innerHTML) {
                                    element.local.pintxosVotados.forEach(function(ele, index, array) {
                                        
                                        arrayVotados.push(ele);
                                        
                                    });
                                }
                		        
        		            });
                		    
                		    
                		    
                		    arrayVotados.forEach(function(element, index, array) {
                		        
                		        if (element == ident) {
                		            votado = true;
                		        }
                		        
                		    });
                		    
                		    if (votado) {
                	    
                        	    alert("Ya has votado ese pintxo!");
                        	    
                        	}
                        	
                        	else {
                        	    if(puntos == 1){
                        
                                    alert("¡Le has dado 1 punto!");
                                    
                                }else{
                                    
                                    alert("¡Le has dado "+puntos+" puntos!");
                                    
                                }
                         
                                $.post( "/emiteVoto", {
                                    id: ident,
                                    punt: nuevosPuntos,
                                    votes: nuevosVotos,
                                    med: nuevaMedia
                                });
                            
                        	}
                        		    
                		}
                        		
                	});
                    
                });                 
            }else{
                $( ".ratings_stars" ).click(function() {
                    
                    /* PONER AQUI QUE SALGA EL FORMULARIO DE REGISTRO */
                    alert('¡No puedes votar si no estás registrado!');
                    
                    
                    
                });
            }
    

      $('.ratings_stars').hover(
            // Handles the mouseover
            function() {
                $(this).prevAll().andSelf().addClass('ratings_over');
                $(this).nextAll().removeClass('ratings_vote');
                $(this).nextAll().removeClass('ratings_over');
            },
            // Handles the mouseout 
            function() {
                $(this).prevAll().andSelf().removeClass('ratings_over');
                $(this).nextAll().andSelf().removeClass('ratings_vote');
                estrellasMedia();
                /*set_votes($(this).parent());*/
            }
        );
});