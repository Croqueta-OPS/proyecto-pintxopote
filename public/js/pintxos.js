$(document).ready(function() {

	$("#apintxos").click(function(event) {

		$.ajax({

			type: "GET",
			url: "/pintxos",
			dataType: "json",
			success: function(data){

				var pintxos = "";

				data.forEach(function(element, index, array) {
					
					pintxos += "<article><img src='img/croqueta.jpg'></img><h3>"+element.nombre+"</h3><p>"+element.descripcion+"</p></article>";					

				});				

				$("#pintxos").html(pintxos);
				
			}

		});            

	});

});