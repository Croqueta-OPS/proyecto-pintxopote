function initialize() {
				
    var mapProp = {
        center:new google.maps.LatLng(43.3133505, -1.9782344),
        zoom:14,
        mapTypeControl: false,
        scrollwheel: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    
    var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
}

google.maps.event.addDomListener(window, 'load', initialize);