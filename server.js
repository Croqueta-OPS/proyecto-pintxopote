var express = require('express');
var app = express();

//var conection = require('mongodb').MongoClient;
var passport = require('passport');
var flash 	 = require('connect-flash');//muestra mensajes flash
var mongoose = require('mongoose');

var morgan       = require('morgan');//muestra las peticiones y respuestas por consola
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');//necesario para recibir datos desde html
var session      = require('express-session');

var configDB = require('./config/database.js');//con esta línea cargamos la url de la base de datos a la variable configDB

// Conexión con BBDD ===============================================================
mongoose.connect(configDB.url, function(err, res){
	if(!err){
		console.log('Conectado a bbdd');
	}	
}); // conectar a la bbdd

require('./config/passport')(passport); // pass passport for configuration

app.use(express.static(__dirname + '/public'));

// Configuración de la aplicación express
app.use(morgan('dev')); // muestra todas los requerimientos por consola
app.use(cookieParser()); // lee cookies (necesario para auth)
app.use(bodyParser()); // Obtiene información desde los formularios html

app.set('view engine', 'ejs'); // aplica ejs como plantilla

// required para passport ==========================================================
app.use(session({ secret: 'wendelmandanga' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // muestra los mensajes flash en caso de error en el login

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//Servidor local ======================================================================
/*var server = app.listen(process.env.PORT || 3000, function() {

    console.log('Listening in port %d', server.address().port);

});*/


//Servidor Cloud9/OpenShift/local
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 3000, ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.listen(port, ip);


//servidor heroku
/*var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000

app.listen(port);*/