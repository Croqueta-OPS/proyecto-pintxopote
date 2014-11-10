var mongoose = require('mongoose');//ya que vamos a usar mongoose, hacemos el llamamiento a su modulo

//Creo el schema que quiero que muestre
 	var bares = new mongoose.Schema({
		  coordX: String,
		  coordY: String,
		  nombre: String,
		  rutas: [],
		  orden: []
	}, {
		collection: 'bares' //asignamos la colección a la que tiene que acceder
	});

// con exports habilitamos el poder usar la colección desde cualquier parte de la aplicación

module.exports = mongoose.model('Bar', bares);