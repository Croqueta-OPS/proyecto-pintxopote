window.onload = function() { //tras cargar la página ...
//visor1=document.getElementById("visor"); //referencia al visor
//mititulo=document.getElementById("titulo"); //referencia al pie de foto
}
function mifoto(num) { //cambiar la imagen
     f="img/foto"+num+".png"; //ruta de la nueva imagen
     document.images["fotoVisor"].src=f; //cambiar imagen
}