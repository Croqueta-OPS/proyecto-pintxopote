//Script que hace a la página scrollear hasta arriba al hacer clic en "HOME" o en el logo

//Necesitamos este script aparte del "scrollAnimado.js", pues tratamos de forma un poco diferente
//estos dos botones en el html y css

//El script se ejecuta desde la carga de página
$(document).ready(function () {
    
    //Escondemos el navegador de redes lateral, ya que arriba no nos hace falta
    $(".navRedesLateral").hide();
    
    //Al hacer clic sobre los botones con class "homeButton"
    $('.homeButton').click(function(e) {

        //Indicamos que el body de la página se "animará" 
        $('html,body').animate({
			
			//Hará un scroll hasta arriba del todo
			scrollTop: 0
		
		//Y tardará 0.5 segundos en hacerlo, para darle el efecto de movimiento en vez de aparecer arriba de golpe
		}, 500);
		
		//El evento preventDefault() impide que se ejecute la función predeterminada al clicar este botón, 
		//que sería saltar al ancla de inicio sin scrolling
        e.preventDefault();
        
    });
    
});