$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        /*feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },*/ //Nota Borja: mirar porque no funcionan los glyphicon con bootstrap
        fields: {
            email: {
                validators: {
                    notEmpty: {
                        message: 'No puedes dejar el email vacío'
                    },
                    emailAddress: {
                        message: 'No es un formato de email válido'
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
                        min: 8,
                        max: 20,
                        message: 'El password debe tener como mínimo 4 caracteres'
                    }
                }
            }
        }
    });
});