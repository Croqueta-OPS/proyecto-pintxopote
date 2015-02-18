module.exports = function(app, passport) {

	var Pintxo = require('../app/models/pintxo');//modelo
	var User = require('../app/models/user');//modelo
	var Bar = require('../app/models/bar');//modelo
	var validator = require('email-validator');

	// =====================================
	// INDEX ========
	// =====================================
	
	app.get('/', function(req, res) {
		
		//Si el usuario está logueado y no es "undefined" entra por aquí y se activan algunas opciones en el index
		if(req.isAuthenticated() && typeof req.user.local !== "undefined"){
		
			res.render('index.ejs', { 
				nombre: req.user.local.nomUsuario,
				img: req.user.local.avatar,
				clase : 'visible', 
				clase2: 'escondido',
				message : 'a',
				message2 : 'a'
			});
		//Si no está logueado pasamos otro tipo de variable
		}else{
			
			res.render('index.ejs', { 
				nombre : '', 
				img: '',
				clase  : 'escondido', 
				clase2 : 'visible',
				message : req.flash('loginMessage'),
				message2 : req.flash('signupMessage')
			}); // Carga el index.ejs
			
		}
		
	});

	app.get('/pintxos', function (require, response) {
		//Hacemos un find en la base de datos de la colección Pintxos
	 	Pintxo.find(function(err, pintxos) {
	 		
 			if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  			
		});
		
	});
	
	app.get('/usuarios', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	User.find(function(err, usuarios) {
	 		
 			if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(usuarios);
  			
		});
		
	});
	
	
	app.get('/bares', function (require, response) {
		
	 	Bar.find(function(err, bares) {
	 		
 			if (err) return console.error(err);
  			response.send(bares);
  			
		});
		
	});
	
	// =====================================
	// API ===============================
	// =====================================
	// Aquí se gestiona la API interna
	
	//muestra por el pintxo por orden de registro
	app.get('/pintxosDatos', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find({}, '-_id nombre descripcion', function(err, pintxos) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  		});
	});
	
	//muestra por el pintxo por orden de registro
	app.get('/pintxosDatos/:numero', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find(function(err, pintxos) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos[require.params.numero].nombre);
  		});
	});
	
	//muestra por el pintxo por nombre
	app.get('/pintxosDatos/nombre/:nombre', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Pintxo.find({'nombre': require.params.nombre}, '-_id nombre descripcion', function(err, pintxos) {
			
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(pintxos);
  			
  		});
	});
	
	
	//muestra todos los bares
	app.get('/baresDatos', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find({}, '-_id nombre coordX coordY', function(err, bares) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares);
  		});
	});
	
	//muestra los bares por el número seleccionado
	app.get('/baresDatos/numero/:numero', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find(function(err, bares) {
	 		
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares[require.params.numero].nombre);
  		});
	});
	
	//muestra los datos por el nombre
	app.get('/baresDatos/nombre/:nombre', function (require, response) {
		//Hacemos un find en la base de datos de la collección Pintxos
	 	Bar.find({'nombre': require.params.nombre}, '-_id nombre coordX coordY', function(err, bares) {
			
	 		if (err) return console.error(err);
 			//Obtenemos un array de pintxos (objetos json)
  			response.send(bares);
  			
  		});
	});
	
	// =====================================
	// LOGIN ===============================
	// =====================================
	// Muestra el formulario del login
	/*app.get('/login', function(req, res) {

		// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse
		res.render('login.ejs', { message: req.flash('loginMessage')});
		
	});*/

	// =====================================
	// SIGNUP ==============================
	// =====================================
	// Muestra el formulario de registro
	app.get('/signup', function(req, res) {
		// carga la página de registro y muestra un mensaje en caso de error al registrarse
		res.render('signup.ejs', { message: req.flash('signupMessage')});
	});
	
	// Muestra el formulario del login de la parte de administracion
	app.get('/admin', function(req, res) {

		// carga la página de inicio de sesión y muestra un mensaje en caso de error al registrarse
		res.render('admin.ejs', { message: req.flash('loginMessage')});
		
	});
	
	//Parte de administracion de pintxos
	app.get('/administracion', isLoggedIn, function(req, res) {
		res.render('administracion.ejs');
	});
	
	
	
	// =====================================
	// PROFILE SECTION =====================
	// =====================================
	// Para entrar en la sección de profile, hacemos que sea obligatorio estar logeado usando la función 'isLoggedIn'
	// we will use route middleware to verify this (the isLoggedIn function)
	app.get('/profile', isLoggedIn, function(req, res) {
		
		res.render('profile.ejs', {
			user : req.user // get the user out of session and pass to template
		});

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
				//Pasamos a la variable pintxos el pintxo
				res.render('edita-pintxos.ejs', {
					pintxos: pintxo
				});
			//Cierre de else
			}
			//Cierre del find
		});
	});
	
	//Añadir un pintxo a la colección de pintxos
	app.post('/edita-pintxos', isLoggedIn, function(req, res) {
		
		if (req.body.nombre.length > 20 || req.body.descripcion.length > 140) {

			if (req.body.nombre.length > 20) {
				console.log("El nombre es demasiado largo. (max. 20)");
				res.redirect('/edita-pintxos');
			}
			if (req.body.descripcion.length > 140) {
				console.log("La descripcion es demasiado larga. (max. 140)");
				res.redirect('/edita-pintxos');
			}
			
		}
		else {	
			
			//Creamos una variable para crear un objeto de tipo Pintxo
			var pintxo = new Pintxo ({
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				img: req.body.img,
			});
	
	
			//Para guardar dicha instancia en la base de datos
			pintxo.save(function (err, pintxo) {
	
			  	//Si existe un error
				if(err){
					
					//Muestra por consola el error
			    	console.log('ERROR: ' + err);
			    	
				}
				else{
					//Muestra el mensaje por consola
	  				console.log(pintxo.nombre + ' ha sido guardado.');
					res.redirect('/edita-pintxos');
				}
			});
		
		}
		
	});
	
	//Permitimos a los usuarios emitir un voto a cada pintxo, controlamos que cada pintxo solo sea votado una vez por persona y siempre y cuando sea un usuario registrado
	app.post('/emiteVoto', isLoggedIn, function (req, res) {
	    console.log('id pintxo: '+req.body.id);
		console.log('id usuario: '+req.user._id);
		
		var existePintxo = false;
		
		//Buscamos el usuario que ha hecho click en el pintxo en la BD
		User.find({_id:req.user._id}, function(err, user) {
					
					//recorremos los campos del usuario
					user.forEach(function(element, index, array) {
						
						//recorremos el campo de pintxos votados que es un array 
						element.local.pintxosVotados.forEach(function(element2, index, array) {
							
							console.log("pintxos" + element2);
								
							//si el id del pintxo a votar existe en el campo pintxos votados este no se puede votar
							if(element2 == req.body.id){
								existePintxo = true;
								console.log("El pintxo con id está votado: "+existePintxo);
							}
								
						});
						
						
						if (!existePintxo && index === array.length - 1) {
						
							console.log("fin de array " + "existePintxo: "+existePintxo);
							
							Pintxo.update({_id: req.body.id}, {media: req.body.med, votos: req.body.votes, puntos: req.body.punt}, null, function (err) {
			
									//Si hay error
									if (err){
								      	//Muestra por consola el error
								    	console.log('ERROR: ' + err);
								    }else{
								    	//redireccionamos a la página /edita-pintxos
								    	console.log('entra');
								    	res.redirect('/');
					        			
								    }
					
							});
							
							
							User.findById(req.user._id, function(err, user) {
							       if(err){
								       console.log(err);
							       }else{
							       		
							       		user.local.pintxosVotados.push(req.body.id);
							       		
							       		user.save (function (err, pintxo) {
						
										  	//Si existe un error
											if(err){
												
												//Muestra por consola el error
										    	console.log('ERROR: ' + err);
										    	
											}
											else{
													console.log('Agregado');
								        	    console.log('id pintxo2: '+req.body.id);
												console.log('id usuario2: '+req.user._id);
											}
										});
							    	}
							    }
							);
											}
							
										});	
										
							});
		
	    
	    
	});
	
	//Añadir un pintxo a la colección de pintxos
	app.post('/actualiza-pintxos',  isLoggedIn, function(req, res) {
		
		if (req.body.nombreP.length > 50 || req.body.descripcionP.length > 140) {

			if (req.body.nombreP.length > 50) {
				console.log("El nombre es demasiado largo. (max. 20)");
				res.redirect('/edita-pintxos');
			}
			if (req.body.descripcionP.length > 140) {
				console.log("La descripcion es demasiado larga. (max. 140)");
				res.redirect('/edita-pintxos');
			}
			
		}
		else {	
		
			Pintxo.update({_id: req.body._id}, {nombre: req.body.nombreP, descripcion: req.body.descripcionP, img: req.body.imgP}, null, function (err) {
	
				//Si hay error
				if (err){
			      	//Muestra por consola el error
			    	console.log('ERROR: ' + err);
			    }else{
			    	//redireccionamos a la página /edita-pintxos
					res.redirect('/edita-pintxos');
					
			    }
	
			//Cierre del mtodo update
			});
		
		}
		
	//Cierre de la función
	});
	
app.post('/actualiza-usuarios', function(req, res) {
	
	var existeNombre = false;
	var existeEmail = false;
	var formato = /^(?:[0-9]{2})?[0-9]{2}\/[0-3]?[0-9]\/[0-3]?[0-9]$/;
	
	User.findById(req.user._id, function(err, user){
		
		if (!user) { 
			return next(new Error('Could not load Document'));
		} 
		else {

			if (req.body.username.length > 10 || req.body.username.length < 3 || !validator.validate(req.body.email) || !formato.test(req.body.birthday) || req.body.email.length > 50) {

				if (req.body.username.length > 10 || req.body.username.length < 3) {
					console.log("El nombre debe tener entre 3 y 10 caracteres.");
					res.redirect('/profile');
				}
				/*if (req.body.password.length > 8) {
					console.log("La contraseña es demasiado larga. (max. 140)");
					res.redirect('/profile');
				}*/
				if (!validator.validate(req.body.email)) {
					console.log("El email no es válido.");
					res.redirect('/profile');
				}
				if (!formato.test(req.body.birthday)) {
					console.log("La fecha no es válida.");
					res.redirect('/profile');
				}
				if (req.body.email.length > 50) {
					console.log("El email es demasiado largo. (max. 50c)");
					res.redirect('/profile');
				}
				
			}	
			else {
				
				User.find({}, function(err, user) {
					
					user.forEach(function(element, index, array) {
	
						if (element.local.nomUsuario == req.body.username && element.id != req.body.idUsuario) {
							existeNombre = true;
						}
						
						if (element.local.email == req.body.email && element.id != req.body.idUsuario) {
							existeEmail = true;
						}
						
						if (index == array.length - 1) {
							actualizar(existeNombre, existeEmail);
						}
		
					});	
					
				});
				
				function actualizar(existeNom, existeEm) {
	
					if (!existeNom && !existeEm) {
						
						user.local.nomUsuario = req.body.username;
						user.local.email = req.body.email;
						user.local.fechaNac = req.body.birthday;
						
						user.save(function(err) {
							if (err)
								console.log('error');
							else {
							}
							res.redirect('/profile');
						});
						
					}
					else {
						//DE AQUI SE ENVIA EL ERROR SI YA EXISTE EL USUARIO
						if (existeNom) {
							console.log("ya existe el nombre");
						}
						if (existeEm) {
							console.log("ya existe el email");
						}
						res.redirect("/profile")
					}
					
				}
			
			
			}
			
		}
		
	});
	
});
	
	app.post('/insertImg', isLoggedIn, function(req, res) {

		User.findById(req.user._id, function(err, user) {

			user.local.avatar = req.body.img;
			
			user.save(function(err) {
				
				if (err)
					console.log('Error al guardar avatar');
				else {
					console.log('Avatar cambiado');
				}
				
			});
		
		});
	});
	
		app.post('/anade-pintxos', isLoggedIn, function(req, res) {
			
			console.log(req.body.nombre);
			//Creamos una variable para crear un objeto de tipo Pintxo
			var pintxo = new Pintxo ({
	
				nombre: req.body.nombre,
				descripcion: req.body.descripcion,
				img: req.body.img,
				media: '0',
				votos: '0',
				puntos:'0'
				
			});
	
	
			//Para guardar dicha instancia en la base de datos
			pintxo.save(function (err, pintxo) {
	
			  	//Si existe un error
				if(err){
					
					//Muestra por consola el error
			    	console.log('ERROR: ' + err);
			    	
				}
				else{
					//Muestra el mensaje por consola
	  				console.log(pintxo.nombre + ' ha sido guardado.');
					res.redirect('/edita-pintxos');
				}
			});
	});
		
		

	
	app.post('/borra-pintxos',  isLoggedIn,function(req, res){
		
		Pintxo.findByIdAndRemove(req.body.id, function (err, users) {
 
    		//Si existe un error
			if(err){
				
				//Muestra por consola el error
		    	console.log('ERROR: ' + err);
		    	
			}
			else{
  				res.redirect('/edita-pintxos');
			}
 
  		});

	});

	// =====================================
	// LOGOUT ==============================
	// =====================================
	app.get('/logout', function(req, res) {
		req.logout();
		res.redirect('/');
	});

	// procesamos el formulario de registroedita-pi
	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect : '/profile', // redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));

	// procesamos el formulario login
	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile',// redirect to the secure profile section
		failureRedirect : '/', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	
	//////////BORRAR SI NO FUNCIONA PARA NADA////////////////////////
	// procesamos el formulario login
	app.post('/admin', passport.authenticate('local-admin', {
		successRedirect : '/administracion', // redirect to the secure profile section
		failureRedirect : '/admin', // redirect back to the signup page if there is an error
		failureFlash : true // allow flash messages
	}));
	////////////////////////////////////////////////////////////////
	
	app.get('/about', function(req, res){
		res.render('about.ejs');
	});
	
	app.get('/api', function(req, res){
		res.render('api.ejs');	
	});
	
};

// esta es la función utilizada para verificar que un usuario está autentificado
function isLoggedIn(req, res, next) {
	// Si el usuario está autentificado, sigue adelante 
	if (req.isAuthenticated())
		return next();

	// si no ha accedido, redirecciona al inicio
	res.redirect('/');
}
