// app/models/user.js
// Llama a los requerimientos, en este caso mongoose y bcrypt
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// Definimos el esquema para el modelo de usuario
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
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
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// validar el password
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// crea el modelo para los usuarios y lo exporta para poder usarlo desde cualquier lugar de la app
module.exports = mongoose.model('User', userSchema);