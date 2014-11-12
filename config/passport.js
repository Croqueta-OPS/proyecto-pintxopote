// config/passport.js

// Declaramos la estragia que vamos a seguir. En este caso logeamos desde local.
var LocalStrategy   = require('passport-local').Strategy;

// Requerimos el tipo de modelo que vamos a usar
var User       		= require('../app/models/user');

// Exponemos esta función a nuestra aplicación con module.exports
module.exports = function(passport) {

    // =========================================================================
    // Configuración de passport session ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport necesita habilitar el serializar o deserializar usuarios por sesión

    // Se usa para serializar al usuario por sesión
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // utilizado para deserializar
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });
    //-------------------------
     // =========================================================================
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

        // asynchronous
        // User.findOne wont fire unless data is sent back
        process.nextTick (function() {

		// find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
        User.findOne({ 'local.email' :  email }, function(err, user) {
            // if there are any errors, return the error
            if (err)
                return done(err);

            // check to see if theres already a user with that email
            if (user) {
                return done(null, false, req.flash('signupMessage', 'Ese email está cogido.'));
            } else {

				// if there is no user with that email
                // create the user
                var newUser = new User();

                // set the user's local credentials
                newUser.local.email = email;
                newUser.local.password = newUser.generateHash(password);
                newUser.local.nomUsuario = req.body.nombre;
               

				// save the user
                newUser.save (function(err) {
                    if (err)
                        throw err;
                    return done (null, newUser);
                });
            }

        });    

       
    });
}));
};