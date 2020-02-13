"use strict"

const moment = require('moment');
const responses = require('../base/settings');
const Cadena = require('../models/cadena');


let cadenaController = {

    createCadena: (request, response) => {
        let res = responses;
        console.log(res.ok)
        let params = request.body;
        let modelCadena = new Cadena({
            cadena: "",
            nit: params.nit,
            dateCreated: new moment().format('DD/MM/YYYY'),
            enabled: true
        });
        Cadena.find({ nit: params.nit }, (error, result) => {
            console.log(result.length)
            if (error) return response.status(500).send(res.serverError);
            if (result.length == 0) {
                modelCadena.save((err, modelStored) => {
                    if (err) return response.status(500).send(res.serverError);
                    if (!modelStored) return response.status(400).send(res.badRequest);
                    return response.status(200).send(res.ok)
                });
            } else {
                return response.status(200).send(res.alreadyExist)
            }
        })
    },

    getCadena: (request, response) => {
        let res = responses;
        let params = request.body;
        Cadena.find({ nit: params.nit }, (error, result) => {
            if (error) return response.status(500).send(res.serverError);
            if (!result) return response.status(400).send(res.badRequest);
            if (result.length === 0) return response.status(202).send(res.noContent);
            if (result) return response.status(200).send(result);
        });
    },

    getCadenas: (request, response) => {
        let res = responses;
        let params = request.body;
        Cadena.find({}, (error, result) => {
            if (error) return response.status(500).send(res.serverError)
            if (result.length == 0) return response.status(400).send(res.badRequest)
            if (result) return response.status(200).send(result)
        });
    },

    updateCadena: (request, response) => {
        let res = responses;
        let id = request.params.id
        let params = request.body;
        Cadena.findOneAndUpdate(
            { nit: params.nit },
            params,
            { safe: true, upsert: true },
            (error, result) => {
                if (error) return response.status(500).send(res.serverError);
                if (!result) return response.status(400).send(res.badRequest);
                if (result) return response.status(200).send(res.ok);
            }
        )
    },

    deleteCadena: (request, response) => {
        let res = responses;
        let params = request.body;
        Cadena.findOneAndUpdate(
            { nit: params.nit },
            { 'enabled': false },
            { safe: true, upsert: true },
            (error, result) => {
                if (error) return response.status(500).send(res.serverError);
                if (!result) return response.status(400).send(res.badRequest);
                if (result) return response.status(200).send(res.ok);
            }
        )

    },
}

module.exports = cadenaController;