$(window).load(function() {
    
    var logueado = $('#btnUsuario').attr('class');
            
            if(logueado=='visible'){
                $( ".ratings_stars" ).click(function() {
                    
                    var ident = $(this).attr("id");//guardamos el ID del pintxo en la variable
                    var puntos = $(this).attr("value");//guardamos el valor del voto
                    
                    var cantPuntos = $(this).siblings(".votos").children("div.total_puntos").attr("value");//guardamos los puntos totales que tiene ese pintxo
                    var votos = $(this).siblings(".votos").children("div.total_votes").attr("value");//guardamos el total de los votos
                    var media = $(this).siblings(".votos").children("div.media_votes").attr("value");//guardamos la media
                    
                    
                    alert(ident+" valoracion:"+puntos+" votos:"+votos+" media:"+media);
                    
                    puntos = parseInt(puntos);
                    votos = parseInt(votos);
                    media = parseInt(media);
                    nuevosPuntos = parseInt(nuevosPuntos);
                    cantPuntos = parseInt(cantPuntos);
                    
                    var nuevosPuntos = parseInt(cantPuntos + puntos);//obtenemos los nuevos puntos
                    var nuevosVotos = parseInt(votos+1);//obtebemos la nueva cantidad de votos
                    var nuevaMedia = parseInt(nuevosPuntos/nuevosVotos);//obtenemos la nueva media
                    
                    //alert("nuevos votos:"+nuevosVotos+", nuevos puntos:"+nuevosPuntos+", nueva media:"+nuevaMedia);
                     
                        $.post( "/emiteVoto", {
                            id: ident,
                            punt: nuevosPuntos,
                            votes: nuevosVotos,
                            med: nuevaMedia
                        });
                    location.reload(function (){
                    $(window).load(function() {

                        $('.ratings_stars').hover(
                        // Handles the mouseover
                        function() {
                            $(this).prevAll().andSelf().addClass('ratings_over');
                            $(this).nextAll().removeClass('ratings_vote'); 
                        },
                        // Handles the mouseout 
                        function() {
                            $(this).prevAll().andSelf().removeClass('ratings_over');
                        }
                        );
                    });
                    });
                });                 
            }else{
                $( ".ratings_stars" ).click(function() {

                    alert('¡No puedes votar si no estás registrado!');
                });
            }
    
    
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
});