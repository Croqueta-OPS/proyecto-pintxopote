$(document).ready(function() {

	$("#apintxos").click(function(event) {

		$.ajax({

			type: "GET",
			url: "/pintxos",
			dataType: "json",
			success: function(data){

				var pintxos = "<br/><br/><p> Nombre: "+data.nombre+"<br/>Apellido: "+data.apellido+"</p>"
				$("#pintxos").html(pintxos);

			}

		});            

	});

});