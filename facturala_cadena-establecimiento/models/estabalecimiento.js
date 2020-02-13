"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estableciemtoSchema = Schema(
    {
        fk_cadena: String,
        enabled: Boolean,
        nit: String,
        nombre: String,
        direccion: String,
        telefono: String,
        correo: String,
        contrasena: String,
        encargado: String,
        fechaCreacion: String,
        empleado: [
            {
                nombre: String
            }
        ]
    }
);

module.exports = mongoose.model('estableciemto', estableciemtoSchema);