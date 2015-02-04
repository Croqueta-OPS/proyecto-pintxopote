//Script para crear la animación de scrolling en la página al saltar de anclas

$(function() {
			
	//Al hacer clic sobre cualquier botón con class "ancla" (los del menú)
    $('.ancla').click(function() {
    
        //Le indicamos que no nos cambie la url, que es lo que haría con el sistema normal de anclas ("...com/#pintxos")
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')) {
            
            
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                
                //Indicamos que el body de la página se "animará" 
                $('html,body').animate({
                
                    //Hará un scroll hasta la posición del ancla, -90 píxeles para salvar la altura de la barra de menú
                    scrollTop: target.offset().top - 125
            
                //Y tardará 0.5 segundos en hacerlo, para darle el efecto de movimiento en vez de aparecer en el destino de golpe
                }, 500);
                
                return false;
                
            }
            
        }
    
    });

});