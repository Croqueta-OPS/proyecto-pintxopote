//Script que pide elementos Pintxo al servidor (que hará una consulta a MongoLab para devolverlos) 
//y los carga en el <div> de pintxos de forma dinámica, sin necesidad de recargar la página.

//En este caso está puesto para hacerlo nada más recargar la página, pero se puede utilizar para cargar nuevos pintxos mediante eventos de botones, por ejemplo
$(document).ready(function() {	

	$.ajax({
		
		type: "GET",	//Indicamos que se trata de una petición GET
		url: "/pintxos",	//Accediendo a pintxos
		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
		
		//Si la petición es correcta, se ejecutará el script de carga de datos
		success: function(data) {


			//Creamos una variable String para meter instrucciones html, que será la que pasaremos despues al html
			//Primero creamos un <div> en el html, le ponemos un título y subtítulo, y abrimos otro <div> dentro para meter los pintxos
			var pintxos = "<div class='titulo'><h1>Pintxos</h1><h2>Degusta la variedad</h2></div><div class='pintxo'>";

			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {				
				
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				pintxos += "<article><img src='"+element.img+"'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p>";					
					pintxos += "<div class='rate_widget'>";
						pintxos += "<div id='"+element._id+"1' value='1' class='star_1 ratings_stars'></div>";
						pintxos += "<div id='"+element._id+"2' value='2' class='star_2 ratings_stars'></div>";
						pintxos += "<div id='"+element._id+"3' value='3' class='star_3 ratings_stars'></div>";
						pintxos += "<div id='"+element._id+"4' value='4' class='star_4 ratings_stars'></div>";
						pintxos += "<div id='"+element._id+"5' value='5' class='star_5 ratings_stars'></div>";
						pintxos += "<div class='votos'><div class='total_votes' value='"+element.votos+"'>votos: "+element.votos+" </div>";
						pintxos += "<div class='total_puntos' value='"+element.puntos+"'>puntos: "+element.puntos+" </div>";
						pintxos += "<div class='media_votes' value='"+element.media+"'>media: "+element.media+" </div></div>";
					pintxos += "</div>";
				pintxos += "</article>";
				
			});		
			
			//Cerramos los <div> del html
			pintxos += "</div>";
			

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#pintxos").html(pintxos);
			
			data.forEach(function(element, index, array) {
			
				$("#"+element._id+""+element.media).prevAll().andSelf().addClass('ratings_over');
				$("#"+element._id+""+element.media).prevAll().andSelf().removeClass('ratings_vote');
			
			});
			
		}

	});
	
});