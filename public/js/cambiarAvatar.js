$(document).ready(function() {

	var imageLoader = document.getElementById('imageLoader');
	imageLoader.addEventListener('change', handleImage, false);
	
	var imgUrl = document.getElementById("avatarString").innerHTML;
	
	document.getElementById("avatarImg").src = imgUrl;
	
	function handleImage(e) {
	
		var reader = new FileReader();
		
		var img = new Image();
		
		reader.onload = function(event) {
			
			img.src = reader.result;
			
			img.onload = function() {
				
				if (this.height > 125 || this.width > 125) {
					alert("La imagen debe ser de 125px x 125px");
				}
				else {
					document.getElementById("avatarImg").src = event.target.result;
					document.getElementById("avatarString").innerHTML = event.target.result;

					guardarAvatar();

				}
			
			};
			
		};
		
		reader.readAsDataURL(e.target.files[0]);
	
	}
	
	function guardarAvatar() {
        
        $.post( "/insertImg", {
            id: document.getElementById("nom-usuario").childNodes[0].innerHTML,
            img: document.getElementById("avatarString").innerHTML
        });
        
    }

});