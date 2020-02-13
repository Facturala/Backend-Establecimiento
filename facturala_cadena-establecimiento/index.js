"use strict"

const mongoose = require('mongoose');
const app = require('./app');
const port = 3700;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

const errorMessage = '***hmm... it seems there is something wrong, hope this log can be helpful: ';

const connection = async () => {
    try {
        const connection = await mongoose.connect('mongodb://localhost:27017/facturala_cadena-establecimiento', { useNewUrlParser: true, useUnifiedTopology: true });
        console.info('conection with database succssefully');
        return true
    }
    catch (error) {
        return console.warn(errorMessage + error)
    }
};

const runServer = async () => {
    try {
        const conn = await connection();
        if (conn == true) {
            app.listen(port, () => {
                console.log(`server running successfully on port ${port}`)
            })
        }
    } catch (error) {
        return console.warn(errorMessage + error)
    }
}; runServer();
