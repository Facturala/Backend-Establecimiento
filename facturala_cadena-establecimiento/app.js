"use strict"

const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes/cadena-estableciemto'); //load route file

let app = express();

//midleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cors

//routes
app.use('/api', routes)

//export
module.exports = app;