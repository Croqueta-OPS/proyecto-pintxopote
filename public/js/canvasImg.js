$(document).ready(function() {	

var imageLoader = document.getElementById('imageLoader');
    imageLoader.addEventListener('change', handleImage, false);

	var canvas = document.getElementById('imageCanvas');
	var ctx = canvas.getContext('2d');


	function handleImage(e){

	    var reader = new FileReader();

	    reader.onload = function(event){

	        var img = new Image();



	        img.onload = function(){

	        	if(img.width > 125 || img.height > 125){
	        	
	        		alert("La imagen debe ser de 125x125px. La imagen no se cargará.");

	       		}else{

	        	canvas.width = img.width;
	            canvas.height = img.height;
	            ctx.drawImage(img,0,0);

	        	}
	        	

	        }

	       img.src = event.target.result;
	    }

	    reader.readAsDataURL(e.target.files[0]);     
	}

	var dataURL = canvas.toDataURL();
	
});