$(document).ready(function() {	
    
    $('.btnBorrar').click(function(){ 
                
        $.post( "/borra-pintxos", {id: this.id });
            
    });
});