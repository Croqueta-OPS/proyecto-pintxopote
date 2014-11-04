$(document).ready(function() {	

	$.ajax({

		type: "GET",
		url: "/bares",
		dataType: "json",
		success: function(data){

		

			data.forEach(function(element, index, array) {				
				
                alert(element.nombre);

			});		
			
			

			//$("#pintxos").html(pintxos);
			
		}

	});         	

});