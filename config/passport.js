// config/passport.js

// Declaramos la estragia que vamos a seguir. En este caso logeamos desde local.
var LocalStrategy   = require('passport-local').Strategy;

// Requerimos el tipo de modelo que vamos a usar
var User       		= require('../app/models/user');

var Admin           = require('../app/models/admin');
var validator = require('email-validator');



// Exponemos esta función a nuestra aplicación con module.exports
module.exports = function(passport) {

    // =========================================================================
    // Configuración de passport session =======================================
    // =========================================================================
    // required for persistent login sessions
    // passport necesita habilitar el serializar o deserializar usuarios por sesión

    // Se usa para serializar al usuario por sesión
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // utilizado para deserializar
    passport.deserializeUser(function(id, done) {
        
        Admin.findById(id, function(err, user) {
            if (!user) {
                User.findById(id, function(err, user) {
                    done(err, user);
                });
            }
            else {
                done(err, user);
            }
        });
        
    });

    //-------------------------
     // ========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) { // callback with email and password from our form

        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error before anything else
            if (err)
                return done(err);

            // if no user is found, return the message
            if (!user)
                return done(null, false, req.flash('loginMessage', 'No existe el usuario.')); // req.flash is the way to set flashdata using connect-flash

            // if the user is found but the password is wrong
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Oops! Password incorrecto.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, user);
        });

    }));
    
    //-------------------------
    // ========================================================================
    // Borrar si no funciona =============================================================    
    passport.use('local-admin', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'username',
        passwordField : 'passwordAdmin',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, passwordAdmin, done) { // callback with email and password from our form
        // find a user whose email is the same as the forms email
        // we are checking to see if the user trying to login already exists
        Admin.findOne({ 'username' :  username }, function(err, admin) {
            // if there are any errors, return the error before anything else
            if (err) {
                return done(err);
            }
            // if no user is found, return the message
            if (!admin) {
                return done(null, false, req.flash('loginMessage', 'No existe el usuario.')); // req.flash is the way to set flashdata using connect-flash
            }
            // if the user is found but the password is wrong
            if (!admin.validPassword(passwordAdmin)) {
                return done(null, false, req.flash('loginMessage', 'Oops! Password incorrecto.')); // create the loginMessage and save it to session as flashdata
            }
            // all is well, return successful user
            return done(null, admin);
        });
    }));
//-------------------------

//-------------------------
 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

    passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true, // allows us to pass back the entire request to the callback
    },
    function(req, email, password, done) {
        
        var res;
        var formato = /^(\d{4})(\/|-)(\d{2})(\/|-)(\d{2})$/;
        var formNombre = /^[a-zA-Z0-9]+$/;
        
        if (req.body.username.length > 8 || req.body.username.length < 3 || !validator.validate(req.body.email) || !formato.test(req.body.birthday) || req.body.email.length > 50 || !formNombre.test(req.body.username) || req.body.password.length > 20 || req.body.password.length < 8 || (req.body.gender != "Hombre" && req.body.gender != "Mujer")) {

			if (req.body.username.length > 8 || req.body.username.length < 3) {
				console.log("El nombre debe tener entre 3 y 8 caracteres.");
			}
			if (req.body.password.length > 20 || req.body.password.length < 8) {
				console.log("La contraseña debe tener entre 8 y 20 caracteres.");
			}
			if (!validator.validate(req.body.email)) {
				console.log("El email no es válido.");
			}
			if (!formato.test(req.body.birthday)) {
				console.log("La fecha no es válida.");
			}
			if (req.body.email.length > 50) {
				console.log("El email es demasiado largo. (max. 50c)");
			}
			if (!formNombre.test(req.body.username)) {
			    console.log("El nombre solo puede tener caracteres alfanuméricos.");
			}
			if (req.body.gender != "Hombre" && req.body.gender != "Mujer") {
			    console.log("Género erroneo.");
			}
			
		/*	User.findOne({ 'local.nomUsuario' :  req.body.username }, function(err, user) {
			    
			    console.log(user);
			    
			});*/
			
		}	
			
		else {
    
            // asynchronous
            // User.findOne wont fire unless data is sent back
            process.nextTick (function() {
    
    		// find a user whose email is the same as the forms email
    		// we are checking to see if the user trying to login already exists
            
            User.findOne({ 'local.nomUsuario' :  req.body.username }, function(err, user) {
                // if there are any errors, return the error
                if (err)
                    return done(err);
                // check to see if theres already a user with that email
                if (user) {
                    console.log("--- El nombre de usuario ya existe ---");
                    return done(null, false, req.flash('signupMessage', 'Ese usuario ya existe.'));
                } 
                else {
    
                    User.findOne({'local.email' : email}, function(err, user){
                        // if there are any errors, return the error
                        if (err)
                            return done(err);
            
                        // check to see if theres already a user with that email
                        if (user) {
                            console.log("--- El email ya existe ---");
                            return done(null, false, req.flash('signupMessage', 'Ese email ya existe.'));
                        }
                        else{
                            // if there is no user with that email
                            // create the user
                            var newUser = new User();
            
                            // set the user's local credentials
                            newUser.local.email = email;
                            newUser.local.password = newUser.generateHash(password);
                            newUser.local.nomUsuario = req.body.username;
                            newUser.local.sexo = req.body.gender;
                            newUser.local.fechaNac = req.body.birthday;
                            newUser.local.avatar = "data:image/png;base64,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";
    
    
            
            
            				// save the user
                            newUser.save (function(err) {
                                if (err)
                                    throw err;
                                return done (null, newUser);
                            });
                            
                            console.log("--- El usuario ha sido creado ---")
                            
                        }
                    });
        
                }
    
            });
        });
    }
}));
};