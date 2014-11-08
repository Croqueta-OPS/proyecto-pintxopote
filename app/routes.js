module.exports = function(app, passport) {

	var Pintxo = require('../app/models/pintxo');//modelo
	var User = require('../app/models/user');//modelo
	var Bar = require('../app/models/bar');//modelo

	// =====================================
	// HOME PAGE (with login links) ========
	// =====================================
	app.get('/', function(req, res) {
		res.render('index.ejs'); // load the index.ejs file
		
			//User.find(function(err, user){
				//if (err) return console.error(err);
				//console.log(user[0].local.email);
			//});
	});

	app.get('/pintxos', function (require, response) {

	 	Pintxo.find(function(err, pintxos) {
	 		
 			if (err) return console.error(err);
  			response.send(pintxos);
  			
		});
		
	});
	
	app.get('/bares', function (require, response) {
		
	 	Bar.find(function(err, bares) {
	 		
 			if (err) return console.error(err);
  			response.send(bares);
  			
		});
		
	});
	
	// =====================================
	// LOGIN ===============================
	// =====================================
	// Muestra el formulario del login
	app.get('/login', function(req, res) {

		// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse
		res.render('login.ejs', { message: req.flash('loginMessage')});
		
	});

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// Muestra el formulario de registro
	app.get('/signup', function(req, res) {
		// carga la página de registro y muestra un mensaje en caso de error al registrarse
		res.render('signup.ejs', { message: req.flash('signupMessage')});
	});

	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// we will want this protected so you have to be logged in to visit
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		
		//Pintxo.find(function(err, pintxos) {
	 		
 			//if (err) return console.error(err);
  			//res.send(pintxos);
  			//console.log(pintxos);
  			
		//});
		
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});
		
		
		console.log(req.user.local.administrador);
	
	
	});
	
	app.get('/edita-pintxos', isLoggedIn, function(req, res){
				
		Pintxo.find({},function(err, pintxo){
			//Si existe un error
			if(err){
				//Muestra por consola
				console.log(err);
				res.render('error');
			}
			else{
				//Muestra el objeto recetas en la plantilla recetas.ejs
				res.render('lista-pintxos.ejs', {
					pintxos: pintxo
				})
			//Cierre de else
			}
			//Cierre del find
			});
	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// procesamos el formulario de registro
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/signup', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// procesamos el formulario login
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/login', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on 
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}
