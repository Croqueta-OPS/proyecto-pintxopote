// app/models/user.js
// Llama a los requerimientos, en este caso mongoose y bcrypt
var mongoose = require('mongoose');
//Usamos el módulo bcrypt para almacenar de forma segura una contraseña
var bcrypt   = require('bcrypt-nodejs');

// Definimos el esquema para el modelo de usuario
var adminSchema = mongoose.Schema({
    
    username   : String,
    passwordAdmin     : String
    
});

// metodos ======================
// Generar hash
// Con el Hash creamos un rango de salida finito del password que nos pasan
adminSchema.methods.generateHash = function(passwordAdmin) {
    return bcrypt.hashSync(passwordAdmin, bcrypt.genSaltSync(8), null);
};

// validar el password
adminSchema.methods.validPassword = function(passwordAdmin) {
    return bcrypt.compareSync(passwordAdmin, this.passwordAdmin);
};

// crea el modelo para los administradores y lo exporta para poder usarlo desde cualquier lugar de la app
module.exports = mongoose.model('Admin', adminSchema);