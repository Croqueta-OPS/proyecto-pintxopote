var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;

function initialize() {
    
    var mapOptions = {
        center: {
            lat: 43.318187,
            lng: -1.979079
        },
        zoom: 14,
        minZoom: 14,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
   
    map = new google.maps.Map(document.getElementById('googleMap'), mapOptions);
    
}

google.maps.event.addDomListener(window, 'load', initialize);