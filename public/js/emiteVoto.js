$(document).ready(function() {	

$( ".ratings_stars" ).click(function() {
            
        var ident = $(this).attr("id");
        var valor = $(this).attr("value");
        var votos = $(this).closest("div.total_votes").attr("value");  
          alert(ident+" "+valor+" " +votos);
          
         
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
    
});