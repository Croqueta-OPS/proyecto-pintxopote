var express = require('express');
var app = express();

//var conection = require('mongodb').MongoClient;
var passport = require('passport');
var flash 	 = require('connect-flash');
var mongoose = require('mongoose');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');

var configDB = require('./config/database.js');

// Conexión con BBDD ===============================================================
mongoose.connect(configDB.url, function(err, res){
	if(!err){
		console.log('Conectado a bbdd');
	}	
}); // connect to our database

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


//Servidor cloud9
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000 || 3000, ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

app.listen(port, ip);