$(document).ready(function() {	
    
    //Al hacer clic sobre un botón que tenga class "btnBorrar"
    $('.btnEditar').click(function() {
    	var id = this.id;

        $.ajax({
		
		type: "GET",	//Indicamos que se trata de una petición GET
		url: "/pintxos",	//Accediendo a pintxos
		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
		
		//Si la petición es correcta, se ejecutará el script de carga de datos
		success: function(data) {
            
            var formulario="";
                
        	//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {
				if(element._id == id) {
				    formulario = "<form action='/actualiza-pintxos' method='post'>";
				    formulario += "<label>ID:</label> <input type='text' name='_id' value='"+element._id+"' readonly><br>";
                    formulario += "<label>Nombre:</label><br><input type='text' name='nombre' value='"+element.nombre+"'><br>";
                    formulario += "<label>Descripción:</label> <input type='text' name='descripcion' value='"+element.descripcion+"'><br>";
                    //formulario += "<label>Descripción:<br></label><textarea rows='4' cols='50'>"+element.descripcion+"</textarea><br>";
                    formulario += "<button type='submit'> Actualizar </button></form>"; 
                    
				}
			});
			
			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$(".formulario-editar").html(formulario);
		}
	});
	
    });
    
    
});