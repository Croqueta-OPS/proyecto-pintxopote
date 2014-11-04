$(function() {
			
    $('.ancla').click(function() {
    
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            
            if (target.length) {
                $('html,body').animate({
                
                    scrollTop: target.offset().top - 100
            
                }, 500);
                
                return false;
            }
        }
    
    });

});