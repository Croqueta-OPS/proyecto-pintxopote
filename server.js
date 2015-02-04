var express = require('express');
var app = express();

//para la api de twitter
var http = require('http');
var server = http.createServer(app);
var Twit = require('twit');
var io = require('socket.io').listen(server);


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
	}else{
		console.log('ERROR EN LA BBDD');
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

//para que no limite la subida de archivos
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//Servidor local ======================================================================
/*var server = app.listen(process.env.PORT || 3000, function() {
    console.log('Listening in port %d', server.address().port);
});*/


//Servidor Cloud9/OpenShift/local
//var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 3000, ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";

//app.listen(port, ip);
//server.listen(port);


//servidor heroku
var port = process.env.PORT || 5000; // Use the port that Heroku provides or default to 5000
app.listen(port);

console.log('Listening in port ' + port);

/////////TWITTER

var watchList = ['pintxopote', 'pintxopo', 'pintxopotedonostia'];
var follow = ['2872220943'];

 var T = new Twit({
    consumer_key:         'XhrMEQs2ne4u6wli0Hz9lsB65'
  , consumer_secret:      'mVrSUMvmfpbfIkKIRklmSk14clFZxyOfbV9LYXTUu1lUO78U6X'
  , access_token:         '2872220943-MQUfP0gpQm5I9tvug6MRdy3vSwctK4kWCv066Ac'
  , access_token_secret:  'lJGWcN8OELnFiYJbJjjoJUjTVMrq3AA2VbR44OsezKZ7p'
})

io.sockets.on('connection', function (socket) {
  console.log('Connected');


 var stream = T.stream('statuses/filter', { follow : follow , track: watchList })

  stream.on('tweet', function (tweet) {

  	// Makes a link the Tweet clickable
    var turl = tweet.text.match( /(http|https|ftp):\/\/[^\s]*/i )
    if ( turl != null ) {
      turl = tweet.text.replace( turl[0], '<a class="tweets" href="'+turl[0]+'" target="new">'+turl[0]+'</a>' );
    } else {
      turl = tweet.text;
    }

    var mediaUrl;
    // Does the Tweet have an image attached?
    if ( tweet.entities['media'] ) {
      if ( tweet.entities['media'][0].type == "photo" ) {
        mediaUrl = tweet.entities['media'][0].media_url;
      } else {
        mediaUrl = null;
      }
    }

    // Send the Tweet to the browser
    io.sockets.emit('stream',turl, tweet.user.screen_name, tweet.user.profile_image_url, mediaUrl);
  

  });
 });
 
 ////////TWITTER