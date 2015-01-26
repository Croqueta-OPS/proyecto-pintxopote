/*

//Script para borrar pintxos desde el formulario de editar/borrar pintxos

//Indicamos que el script se ejecuta desde la carga de página
$(document).ready(function() {	
    
    //Al hacer clic sobre un botón que tenga class "btnBorrar"
    $('#btnGuardarAvatar').change(function() { 
        //Realizamos una peticion POST al servidor, accediendo a '/borra-pintxos' y pasandole la id específica del boton pulsado,
        //que ha sido anteriormente nombrada con la misma id que tiene su pintxo asociado en la BBDD
    
        alert("kk");

        $.post( "/insertImg", {
            id: document.getElementById("nom-usuario").childNodes[0].innerHTML,
            img: document.getElementById("avatarString").innerHTML
        });
            
    });
    
});

*/