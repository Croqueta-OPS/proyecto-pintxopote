$(document).ready(function () {
    
    $(".navRedesLateral").hide();
    
    $('.homeButton').click(function(e) {

        $('html,body').animate({
				
			scrollTop: 0
		
		}, 500);
		
        e.preventDefault();
        
    });
    
});