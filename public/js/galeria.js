window.onload = function() { //tras cargar la página ...
//visor1=document.getElementById("visor"); //referencia al visor
//mititulo=document.getElementById("titulo"); //referencia al pie de foto
}
function mifoto(num) { //cambiar la imagen
     f="foto"+num+".jpg"; //ruta de la nueva imagen
     document.images["fotoVisor"].src=f; //cambiar imagen
     t=document.images["fotos"+num].alt; //texto de pie de foto
     mititulo.innerHTML=t; //cambiar pie de foto
}