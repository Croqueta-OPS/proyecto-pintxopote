function votar(){
      $('.ratings_stars').hover(
        // Handles the mouseover
        function() {
            $(this).prevAll().andSelf().addClass('ratings_over');
            $(this).nextAll().removeClass('ratings_vote'); 
        },
        // Handles the mouseout 
        function() {
            $(this).prevAll().andSelf().removeClass('ratings_over');
            /*set_votes($(this).parent());*/
        }
    );  
};