//Script que hace aparecer y desaparecer un pequeño navegador de redes sociales
//en el lateral de la página, para que sean accesibles una vez dejamos la parte superior

//Indicamos que se ejecutará cada vez que se mueve la página de forma vertical
$(window).bind("scroll", function() {
    
    var width = $(window).width();
    if ((width<=600)) {
        $(".navRedesLateral").fadeOut();
    }else{
           //Si nos encontramos almenos 500 píxeles por debajo de la posición inicial 
        if ($(this).scrollTop() > document.getElementById("navRedes1").offsetTop - 50) {
            //Pedimos que nos muestre el <div> con clase "navRedesLateral"
            $(".navRedesLateral").fadeIn();
    
        }
        
        //Si estamos por encima de la marca establecida
        else {
            
            //Pedimos que nos esconda el navegador
            $(".navRedesLateral").fadeOut();
            
        } 
    }
    
});

/*Con esta función borramos el navegador lateral cuando la resolución es menor a 600px*/
$(window).resize(function() {
    var width = $(window).width();

    if ((width<=600)) {
        $(".navRedesLateral").fadeOut();
    }else{
        $(".navRedesLateral").fadeIn();
    }
});

