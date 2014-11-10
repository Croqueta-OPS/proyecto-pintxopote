//Script que hace aparecer y desaparecer un pequeño navegador de redes sociales
//en el lateral de la página, para que sean accesibles una vez dejamos la parte superior

//Indicamos que se ejecutará cada vez que se mueve la página de forma vertical
$(window).bind("scroll", function() {
    
    //Si nos encontramos almenos 500 píxeles por debajo de la posición inicial 
    if ($(this).scrollTop() > 500) {
        
        //Pedimos que nos muestre el <div> con clase "navRedesLateral"
        $(".navRedesLateral").fadeIn();
    }
    
    //Si estamos por encima de la marca establecida
    else {
        
        //Pedimos que nos esconda el navegador
        $(".navRedesLateral").fadeOut();
    }
    
});