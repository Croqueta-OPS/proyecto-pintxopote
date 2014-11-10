//Script para cambiar en la barra de menú superior el elemento resaltado al clicar en cada uno

/*****************************
TO-DO: Hacer que cambie elemento según movamos el scroll, no solo al clicar los menús
*****************************/

//Indicamos que el script se ejecuta desde la carga de página
$(document).ready(function () {
    
    //Al hacer clic en cualquiera de los botones del menú
    $('.navegador a').click(function(e) {

        //Quitamos la class "active" al elemento que la tenga en el momento
        $('.active').removeClass('active');

        //Declaramos una variable y la igualamos al padre del objeto.
        //En este caso, el objeto es el <a>, y el padre es el <li>
        var $parent = $(this).parent();
        
        //Si el padre no tiene la clase "active"
        if (!$parent.hasClass('active')) {
            
            //Se la ponemos, y el css se encarga de cambiarle el color por ser el que está activo
            $parent.addClass('active');
        }
        
    });
    
});