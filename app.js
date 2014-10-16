var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));



var pintxos = [];

var conection = require('mongodb').MongoClient;

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

app.get('/', function (require, response) {

	response.send('routes/index.html');
	

});

app.get('/pintxos', function (require, response) {

	response.json(pintxos);

});



var server = app.listen(process.env.PORT || 3000, function() {

    console.log('Listening in port %d', server.address().port);

});