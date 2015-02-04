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
			var bares = "<div class='principal'><div class='visor'><img src=img/"+data[0].img+"_principal.jpg alt='' name='fotoVisor'/><div id='navBares'><a href=''><img src='img/open-iconic/svg/plus.svg' id='infoIcon'/></a><a id='mostrarMapa' href='#rutas' class='ancla'><img src='img/open-iconic/svg/map-marker.svg' id='mapaIcon'/></a></div></div></div>";

            bares += "<div class='titulo'><h1>Bares... ¡Qué lugares!</h1><h2>Encuentra los mejores sitios</h2></div><div class='imgBares'><p id='barPrincipal'>"+data[0]._id+"</p><p id='coordX'>"+data[0].coordX+"</p><p id='coordY'>"+data[0].coordY+"</p><p id='nombreBar'>"+data[0].nombre+"</p>";
			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {			
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				bares += '<div id="'+element.nombre+'"><img id="btnCambiar'+index+'" src="img/'+element.img+'_mini.jpg"></img></div>';					
                bares += '<script> document.getElementById("btnCambiar'+index+'").onclick = function() {   document.images["fotoVisor"].src="img/'+element.img+'_principal.jpg";      document.getElementById("barPrincipal").innerHTML = "'+element._id+'";  document.getElementById("coordX").innerHTML = "'+element.coordX+'"; document.getElementById("coordY").innerHTML = "'+element.coordY+'"; document.getElementById("nombreBar").innerHTML = "'+element.nombre+'"; }</script>';
				
				
			});		
			bares += '<script> document.getElementById("mostrarMapa").addEventListener("click", mostrarMapa, false);</script>';
			//Cerramos los <div> del html
			bares += "</div>";
			

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#bares").html(bares);
			
			
			
		}

	});
	



});