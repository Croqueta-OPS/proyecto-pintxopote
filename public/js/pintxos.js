$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/pintxos",
		dataType: "json",
		success: function(data){

			var pintxos = "<h1>Pintxos</h1><h2>Degusta la variedad</h2>";

			data.forEach(function(element, index, array) {
				
				pintxos += "<article><img src='img/croqueta.jpg'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p></article>";					

			});				

			$("#pintxos").html(pintxos);
			
		}

	});         	

});