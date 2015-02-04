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
				    formulario = "<script src='js/cambiarImagenPintxoEditar.js' type='text/javascript'></script>";
				    formulario += "<form>";
				    formulario += "<label>ID:</label> <input type='text' id='idP' name='_id' value='"+element._id+"' readonly><br>";
				    formulario += "<label>Imagen:</label> <img id='pintxoImgEditar' height='153' width='230' src='"+element.img+"'></img><br>";
				    formulario += "<input type='file' id='imageLoaderEditar' name='imagen'>";
                    formulario += "<label>Nombre:</label><br><input type='text' id='nombreP' name='nombre' value='"+element.nombre+"'><br>";
                    formulario += "<label>Descripción:</label> <input type='text' id='descripcionP' name='descripcion' value='"+element.descripcion+"'><br>";
                    //formulario += "<label>Descripción:<br></label><textarea rows='4' cols='50'>"+element.descripcion+"</textarea><br>";
                    formulario += "<button id='botonActualizar'> Actualizar </button></form>"; 
                    
				}
			});
			
			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$(".formulario-editar").html(formulario);
			
		}
	});
	
    });
    
    
});