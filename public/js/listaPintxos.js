$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/profile",
		dataType: "json",
		success: function(data){

			var pintxos = "<div class='pintxos_class'><h1>Pintxos</h1><h2>Degusta la variedad</h2><div class='articulos'>";

			data.forEach(function(element, index, array) {				
				
				pintxos += "<article><img src='img/"+element.img+".jpg'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p></article>";					

			});		
			
			pintxos += "</div></div>";

			$("#contenido").html(pintxos);
			
		}

	});

});