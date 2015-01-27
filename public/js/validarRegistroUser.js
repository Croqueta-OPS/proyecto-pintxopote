$(document).ready(function() {
    $('#formRegistro').bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        /*feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },*/
        fields: {
            username: {
                message: 'Nombre de usuario no válido',
                validators: {
                    notEmpty: {
                        message: 'Introduce un nombre de usuario'
                    },
                    stringLength: {
                        min: 3,
                        max: 10,
                        message: 'El usuario debe tener entre 3 o 8 caracteres'
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9]+$/,
                        message: 'Usuario solo alfanuméricos'
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
                        message: 'El email no puede estar vacío'
                    },
                    emailAddress: {
                        message: 'Introduce un email válido'
                    }
                }
            },
            password: {
                validators: {
                    notEmpty: {
                        message: 'El password no puede estar vacío'
                    },
                    different: {
                        field: 'username',
                        message: 'El password y el nombre de usuario no pueden ser iguales'
                    },
                    stringLength: {
                        min: 8,
                        max: 20,
                        message: 'El password debe estar entre 8 y 20 caracteres'
                    }
                }
            },
            birthday: {
                validators: {
                    notEmpty: {
                        message: 'La fecha de nacimiento no puede estar vacia'
                    },
                    date: {
                        format: 'YYYY/MM/DD',
                        message: 'La fecha de nacimiento no es válida'
                    }
                }
            },
            gender: {
                validators: {
                    notEmpty: {
                        message: 'El género no puede estar vacío'
                    }
                }
            }
        }
    });
});
