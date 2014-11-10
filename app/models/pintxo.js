var mongoose = require('mongoose');//ya que vamos a usar mongoose, hacemos el llamamiento a su modulo

//Creo el schema que quiero que muestre
 	var pintxos = new mongoose.Schema({
		  nombre: String,
		  descripcion: String,
		  img:String
	});

// con export habilitamos el poder usar la colección desde cualquier parte de la aplicación

module.exports = mongoose.model('Pintxo', pintxos);