var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function (require, response) {

	response.send('routes/index.html');

});

var pintxo = [];

var conection = require('mongodb').MongoClient;

conection.connect("mongodb://localhost:27017/pintxopote", function(err, db) {

	if(!err) {
		console.log("We are connected");

		var assert = require('assert');
		var collection = db.collection('pintxos');

		collection.find().toArray(function(err, document) {

			document.forEach(function(element, index, array) {

				console.log (element.nombre+" "+element.apellido);
				pintxo[pintxo.length] = element;	
							
			});

		});
	}

});

app.get('/pintxos', function(require, response){

	response.json(pintxo[0]);

});

var server = app.listen(process.env.PORT || 3000, function() {

    console.log('Listening in port %d', server.address().port);

});