function mostrarFormulario() {

	var escondidos = document.getElementsByClassName('escondido');
	
	for(var i = 0; i != escondidos.length; i++) {
		
		escondidos[i].style.display = 'block';
		
	}

}