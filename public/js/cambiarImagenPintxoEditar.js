$(document).ready(function() {
	
	//http://www.html5rocks.com/en/tutorials/file/dndfiles/

	var imageLoader = document.getElementById('imageLoaderEditar');
	imageLoader.addEventListener('change', handleImage, false);
	
	/*var imgUrl = document.getElementById("StringPintxo").innerHTML;
	
	document.getElementById("pintxoImg").src = imgUrl;*/
	
	function handleImage(e) {
		
		var reader = new FileReader();
		
		var img = new Image();
		
		reader.onload = function(event) {
			
			img.src = reader.result;
			
			img.onload = function() {
				
				if (this.height > 300 || this.width > 300) {
					alert("La imagen debe ser máximo de 300px x 300px");
				}
				else {
			
					document.getElementById("pintxoImgEditar").src = event.target.result; 
}
				}
			
			};
			
		
		reader.readAsDataURL(e.target.files[0]);
	
	}
	
	
	$('#botonActualizar').click(function() { 
		
		
        //Realizamos una peticion POST al servidor, accediendo a '/borra-pintxos' y pasandole la id específica del boton pulsado,
        //que ha sido anteriormente nombrada con la misma id que tiene su pintxo asociado en la BBDD
        $.post( "/actualiza-pintxos", {
            
            _id: document.getElementById("idP").value,
            imgP: document.getElementById("pintxoImgEditar").src,
            nombreP: document.getElementById("nombreP").value,
            descripcionP: document.getElementById("descripcionP").value
            
        });
        
        alert("El pintxo se ha actualizado correctamente");
   
            
    });
    

});