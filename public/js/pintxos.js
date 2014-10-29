$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/pintxos",
		dataType: "json",
		success: function(data){

			var pintxos = "<h1>Pintxos</h1><h2>Degusta la variedad</h2><div class='articulos'>";

			data.forEach(function(element, index, array) {				

<<<<<<< HEAD
			data.forEach(function(element, index, array) {
				
				pintxos += "<article><img src='img/"+element.img+".jpg'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p></article>";					
=======
				pintxos += "<article><img src='img/croqueta.jpg'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p></article>";					
>>>>>>> f4917e3d5c9e5115f3bb7cd98d239ae50af0ae96

			});		
			
			pintxos += "</div>";

			$("#pintxos").html(pintxos);
			
		}

	});         	

});