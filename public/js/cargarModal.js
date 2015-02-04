$(document).ready(function() {	

    if (document.getElementById('modal3') != null) {

        if (document.getElementById('modal3').innerHTML == 'No existe el usuario.' || document.getElementById('modal3').innerHTML == 'Oops! Password incorrecto.') {
    
            var options = {
                "show" : "true"
            };
            
            $('#login').modal(options);
            
        }
        
    }
    
    if (document.getElementById('modal4') != null) {
    
        if (document.getElementById('modal4').innerHTML == 'Ese usuario ya existe.' || document.getElementById('modal4').innerHTML == 'Ese email ya existe.') {
        
            var options2 = {
                "show" : "true"
            };
            
            $('#signup').modal(options2);
      
        }
    
    }

});