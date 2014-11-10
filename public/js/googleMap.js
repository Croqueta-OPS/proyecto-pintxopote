//Script que carga un mapa de Google Maps vacío en la posición especificada


//Declaro el mapa a nivel global para que sea accesible desde fuera del script
var map;

//Declaro e importo el servicio de rutas de Google
var directionsDisplay;
var directionsService = new google.maps.DirectionsService();


//En esta función se detallan las opciones del mapa
function initialize() {
	
	directionsDisplay = new google.maps.DirectionsRenderer();
	
	//Especifico las opciones del mapa
	var mapOptions = {
		
		zoom: 14,	//Zoom inicial
		minZoom: 14,	//Zoom mínimo, para no dejar que se aleje más
		scrollwheel: false,		//No le dejo controlar el zoom con el scrolling, ya que el diseño de nuestra página lo requiere para continuar con la navegación
		mapTypeControl: false,		//Deshabilito la opción de cambiar el tipo de mapa (satélite)
		streetViewControl: false,	//Deshabilito la opción de entrar en Street View
		center: new google.maps.LatLng(43.3133505, -1.9782344)	//LatLng es un objeto definido en la API de Google Maps, que representa un punto en el mapa cogiendo por parámetro la latidud y longitud del mismo
																//En este caso utilizo el punto para hacerlo el centro del mapa de inicio
	};															
	
	//Instancio el mapa, pasandole como parámetros el <div> del html donde quiero que vaya y las opciones escogidas arriba
	map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
	
	//Indico al servicio de rutas de Google que el mapa a utilizar es el recién creado
	directionsDisplay.setMap(map);

}

//Le añado un event listener para que cuando cargue la página ejecute la función initialize()
google.maps.event.addDomListener(window, 'load', initialize);