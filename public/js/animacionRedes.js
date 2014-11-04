$(window).bind("scroll", function() {
    
    if ($(this).scrollTop() > 500) {
        $(".navRedesLateral").fadeIn();
    } 
    else {
        $(".navRedesLateral").fadeOut();
    }
    
});