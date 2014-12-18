$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        /*feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },*/ //Nota Borja: mirar porque no funcionan los glyphicon con bootstrap
        fields: {
            username: {
                message: 'The username is not valid',
                validators: {
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    },
                    stringLength: {
                        min: 6,
                        max: 30,
                        message: 'The username must be more than 6 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'The username can only consist of alphabetical and number'
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar el password vacío'
                    },
                    different: {
                        field: 'username',
                        message: 'El password no puede ser el mismo que el nombre de usuario'
                    },
                    stringLength: {
                        min: 4,
                        message: 'El password debe tener como mínimo 4 caracteres'
                    }
                }
            }
        }
    });
});