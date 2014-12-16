function validarEmail(){
    
    var string1=document.login.email.value;
    
    if (string1.indexOf("@")==-1){
        alert("Please input a valid email address!");
    }
    
}