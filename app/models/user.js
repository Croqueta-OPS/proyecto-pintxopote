// app/models/user.js
// Llama a los requerimientos, en este caso mongoose y bcrypt
var mongoose = require('mongoose');
//Usamos el módulo bcrypt para almacenar de forma segura una contraseña
var bcrypt   = require('bcrypt-nodejs');

// Definimos el esquema para el modelo de usuario
var userSchema = mongoose.Schema({

    local            : {
        nomUsuario   : String,
        email        : String,
        password     : String,
        administrador : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        username     : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    }

});

// metodos ======================
// Generar hash
// Con el Hash creamos un rango de salida finito del password que nos pasan
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// validar el password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// crea el modelo para los usuarios y lo exporta para poder usarlo desde cualquier lugar de la app
module.exports = mongoose.model('User', userSchema);