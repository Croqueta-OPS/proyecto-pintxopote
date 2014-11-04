$(document).ready(function () {
    
    $('.navegador a').click(function(e) {

        $('.active').removeClass('active');

        var $parent = $(this).parent();
        
        if (!$parent.hasClass('active')) {
            $parent.addClass('active');
        }
        
    });
    
});