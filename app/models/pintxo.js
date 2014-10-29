var mongoose = require('mongoose');
//Creo el schema que quiero que muestre
 	var pintxos = new mongoose.Schema({
		  nombre: String,
		  descripcion: String,
		  img:String
	});

// create the model for users and expose it to our app

module.exports = mongoose.model('Pintxo', pintxos);