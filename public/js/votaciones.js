function votar(){
        $( ".ratings_stars" ).click(function() {
            
        var ident = $(this).attr("id");
        var puntos = $(this).attr("value");
        
        var cantPuntos = $(this).siblings(".votos").children("div.total_puntos").attr("value");
        var votos = $(this).siblings(".votos").children("div.total_votes").attr("value");
        var media = $(this).siblings(".votos").children("div.media_votes").attr("value");
        
        alert(ident+" valoracion:"+puntos+" votos:"+votos+" media:"+media);
        
        puntos = parseInt(puntos);
        votos = parseInt(votos);
        nuevosPuntos = parseInt(nuevosPuntos);
        
        var nuevosPuntos = cantPuntos + puntos;
        var nuevosVotos = votos++;
        var nuevaMedia = nuevosPuntos/nuevosVotos;
        
        alert("nuevos votos:"+nuevosVotos);
         
            $.post( "/emiteVoto", {
                id: ident,
                value: nuevosVotos,
                
            });
        
        });
    
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