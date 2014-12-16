$(document).ready(function() {
    
    $('#loginBtn').click(function() {

    	$.ajax({
    		
    		type: "GET",	//Indicamos que se trata de una petición GET
    		url: "/login",	//Accediendo a pintxos
    		dataType: "json",	//El tipo objeto que se espera recibir, en este caso json, un array de pintxos
    		
    		//Si la petición es correcta, se ejecutará el script de carga de datos
    		success: function(data) {
    
                var login = "";
                
                login += "<div class='container'><div class='col-sm-6 col-sm-offset-3'><h1><span class='fa fa-sign-in'></span> Login</h1><% if (message.length > 0) { %><div class='alert alert-danger'><%= message %></div><% } %><!-- LOGIN FORM --><form name='login' action='/login' method='post'><div class='form-group'><label>Email</label><input type='text' class='form-control' name='email' onblur='validarEmail()'></div><div class='form-group'><label>Password</label><input type='password' class='form-control' name='password' onblur='validarPassword()'></div><button type='submit' class='btn btn-warning btn-lg'>Login</button></form><hr><p>¿Aún no tienes una cuenta? <a href='/signup'>Signup</a></p><p>O vete a <a href='/'>inicio</a>.</p></div></div>";
    		
    			$("#panelLogin").html(login);
    			
    		}
    
    	});
    });
});