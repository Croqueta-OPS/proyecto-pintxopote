var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));


// var routes = require('./routes/index');

app.get('/', function (require, response) {
	response.send('routes/index.html');
});

app.get('/request', function(require, response){
	console.log("kk");
});

var conection = require('mongodb').MongoClient;

	var pintxo2 = conection.connect("mongodb://localhost:27017/pintxopote", function(err, db) {
		if(!err) {
			console.log("We are connected");

	

			
		}
		return 0;
	});


var server = app.listen(process.env.PORT || 3000, function(){
    console.log('Listening in port %d', server.address().port);
});