"use strict"

const moment = require('moment');
const Cadena = require('../models/cadena');
const Establecimiento = require('../models/estabalecimiento');
const responses = require('../base/settings');




let establecimientoController = {

    createEstablecimiento: (request, response) => {
        let res = responses;
        let params = request.body;
        let modelCadena = new Cadena({
            cadena: "",
            nit: params.nit,
            dateCreated: new moment().format('DD/MM/YYYY'),
            enabled: true
        });
        Cadena.find({ nit: params.nit }, (error, result) => {
            if (error) return response.status(500).send(res.serverError);
            if (result.length == 0) {
                modelCadena.save((err, modelStored) => {
                    if (err) return response.status(500).send(res.serverError);
                    if (!modelStored) return response.status(400).send(res.badRequest);
                    let modelEstablecimiento = new Establecimiento({
                        fk_cadena: modelStored._id,
                        enabled: true,
                        nit: params.nit,
                        nombre: params.nombre,
                        direccion: params.direccion,
                        telefono: params.telefono,
                        correo: params.correo,
                        contrasena: params.contrasena,
                        encargado: params.encargado,
                        fechaCreacion: new moment().format('DD/MM/YYYY'),
                    });
                    modelEstablecimiento.save((er, establecimientoStored) => {
                        if (er) return response.status(500).send(res.serverError);
                        if (!establecimientoStored) return response.status(400).send(res.badRequest);
                        return response.status(200).send(res.ok);
                    });
                });
            } else {
                let modelEstablecimiento = new Establecimiento({
                    fk_cadena: result[0]._id,
                    enabled: true,
                    nit: params.nit,
                    nombre: params.nombre,
                    direccion: params.direccion,
                    telefono: params.telefono,
                    correo: params.correo,
                    contrasena: params.contrasena,
                    encargado: params.encargado,
                    fechaCreacion: new moment().format('DD/MM/YYYY'),
                });
                modelEstablecimiento.save((err, success) => {
                    if (err) return response.status(500).send(res.serverError);
                    if (!success) return response.status(400).send(res.badRequest);
                    return response.status(200).send(res.ok);
                })
            }
        })
    },


    getEstablecimiento: (request, response) => { },
    getEstablecimientos: (request, response) => { },
    updateEstablecimiento: (request, response) => { },
    deleteEstablecimiento: (request, response) => { },
}

module.exports = establecimientoController;