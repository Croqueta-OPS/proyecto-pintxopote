$(document).ready(function() {
    
    
	
	var array2 = document.getElementsByClassName("idPintxo");
	
    var arrayNombres = [];
    
    var htmlString = "";
    
	$.ajax({
		
		type: "GET",	//Indicamos que se trata de una petición GET
		url: "/pintxos",	//Accediendo a pintxos
		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
		
		//Si la petición es correcta, se ejecutará el script de carga de datos
		success: function(data) {

			data.forEach(function(element, index, array) {

				for (var i = 0; i < array2.length; i++) {
				    
				    if (element._id == array2[i].innerHTML) {
				        arrayNombres.push(element.nombre);
				    }
				    
				}
			
			});

			arrayNombres.forEach(function(element, index, array) {
			    
			    htmlString += "<p class='idPintxo'>"+element+"</p>";
			    
			});
			
			$(".modal-body").html(htmlString);
			
		}

	});
	
});