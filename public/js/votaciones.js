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
    
    $( ".ratings_stars" ).click(function() {
            
        var ident = $(this).attr("id");
        var valor = $(this).attr("value");
          
          alert(ident+" "+valor);
         
        $.post( "/emiteVoto", {
            id: ident,
            value: valor
        });
        
     /*$.ajax({ 
           url: '/emiteVoto',
           type: 'POST',
           cache: false, 
           data: { id: ident, value: valor }, 
           success: function(data){
              alert('Success!')}, error: function(jqXHR, textStatus, err){
               alert(ident+" "+valor)}
        });*/
      
    });
};