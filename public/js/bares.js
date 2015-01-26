//Script que pide elementos Pintxo al servidor (que hará una consulta a MongoLab para devolverlos) 
//y los carga en el <div> de pintxos de forma dinámica, sin necesidad de recargar la página.

//En este caso está puesto para hacerlo nada más recargar la página, pero se puede utilizar para cargar nuevos pintxos mediante eventos de botones, por ejemplo
$(document).ready(function() {	

	$.ajax({
		
		type: "GET",	//Indicamos que se trata de una petición GET
		url: "/bares",	//Accediendo a pintxos
		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
		
		//Si la petición es correcta, se ejecutará el script de carga de datos
		success: function(data) {

			//Creamos una variable String para meter instrucciones html, que será la que pasaremos despues al html
			//Primero creamos un <div> en el html, le ponemos un título y subtítulo, y abrimos otro <div> dentro para meter los pintxos
			var bares = "<div class='principal'><div class='visor'><img src=img/"+data[0].img+".png alt='' name='fotoVisor'/><div id='navBares'><a href=''><img src='img/open-iconic/svg/plus.svg' id='infoIcon'/></a><a href=''><img src='img/open-iconic/svg/map-marker.svg' id='mapaIcon'/></a></div></div></div>";

            bares += "<div class='barTitle'><h1>Bares... ¡Qué lugares!</h1><h2>Encuentra los mejores sitios</h2></div><div class='imgBares'><p id='barPrincipal'></p>";
			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {			
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				bares += '<div id="'+element.nombre+'"><img id="btnCambiar'+index+'" src="img/foto'+(index+1)+'.png"></img></div>';					
                bares += '<script>  document.getElementById("btnCambiar'+index+'").onclick = function() {   document.images["fotoVisor"].src="img/foto'+(index+1)+'.png";      document.getElementById("barPrincipal").innerHTML = "'+element._id+'";     }</script>';
			});		
			
			//Cerramos los <div> del html
			bares += "</div>";
			

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#bares").html(bares);
			
			
			
		}

	});
	



});