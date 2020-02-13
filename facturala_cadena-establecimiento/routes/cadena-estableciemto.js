"use strict"

const express = require('express');
const EstablecimientoController = require('../controllers/establecimiento');
const CadenaController = require('../controllers/cadena');

let router = express.Router();

router.post('/cadena-createCadena', CadenaController.createCadena);
router.get('/cadena-getCadena', CadenaController.getCadena);
router.get('/cadena-getCadenas-list', CadenaController.getCadenas);
router.put('/cadena-updateCadena', CadenaController.updateCadena);
router.delete('/cadena-deleteCadena', CadenaController.deleteCadena);

router.post('/establecimiento-getEstablecimiento', EstablecimientoController.createEstablecimiento);

module.exports = router;