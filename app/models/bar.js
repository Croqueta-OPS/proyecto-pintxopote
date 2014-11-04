var mongoose = require('mongoose');
//Creo el schema que quiero que muestre
 	var bares = new mongoose.Schema({
		  coordX: String,
		  coordY: String,
		  nombre:String
	});

// create the model for users and expose it to our app

module.exports = mongoose.model('Bar', bares);