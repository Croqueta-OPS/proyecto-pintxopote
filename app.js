var express = require('express');
var app = express();

	app.use(express.static(__dirname + '/public'));

var conection = require('mongodb').MongoClient;
var passport = require('passport');
var flash 	 = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');


var pintxos = [];

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

conection.connect("mongodb://croquetaOPS:Ladronmamon1@ds063879.mongolab.com:63879/croquetaops", function(err, db) {

	if(!err) {

		var collection = db.collection('pintxos');

		collection.find().toArray(function(err, arrayPintxos) {

			arrayPintxos.forEach(function(element, index, array) {
				
				pintxos[pintxos.length] = element;
							
			});

		});
	}

});

//app.get('/', function (require, response) {

	//response.send('routes/index.html');
	
//});

//app.get('/pintxos', function (require, response) {

	//response.json(pintxos);

//});



// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


var server = app.listen(process.env.PORT || 3000, function() {

    console.log('Listening in port %d', server.address().port);

});