$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/bares",
		dataType: "json",
		success: function(data){

			var bares = "<div><h1>Bares</h1><h2>¡Qué lugares!</h2></div>"
			console.log(data);
			data.forEach(function(element, index, array) {
		
				bares += "<p>"+element.nombre+"</p>";
				
			});

			$("#bares").html(bares);
			
		}

	});         	

});