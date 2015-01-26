$(document).ready(function() {
    $('#registrationForm').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or late
        fields: {
            username: {
                message: 'Ese nombre de usuario no es válido',
                validators: {
                    notEmpty: {
                        message: 'El nombre de usuario es obligatorio'
                    },
                    stringLength: {
                        min: 3,
                        max: 10,
                        message: 'El nombre de usuario debe tener al menos 3 caracteres y máximo 10'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'El nombre de usuario solo puede contener caracteres del alfabeto'
                    },
                    different: {
                        field: 'password',
                        message: 'The username and password cannot be the same as each other'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'El email es obligatorio'
                    },
                    emailAddress: {
                        message: 'No es un formato de email válido'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    },
                    different: {
                        field: 'username',
                        message: 'The password cannot be the same as username'
                    },
                    stringLength: {
                        min: 8,
                        message: 'The password must have at least 8 characters'
                    }
                }
            },
            birthday: {
                validators: {
                    notEmpty: {
                        message: 'La fecha de nacimiento es obligatoria'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'No es un formato de fecha válido'
                    }
                }
            }
        }
    });
});
