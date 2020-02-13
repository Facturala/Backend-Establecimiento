"use strict"

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cadenaSchema = Schema(
    {
        enabled: Boolean,
        cadena: String,
        nit: String,
        dateCreated: String
    }
);

module.exports = mongoose.model('cadena', cadenaSchema);