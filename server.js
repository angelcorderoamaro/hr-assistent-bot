// Variables

'use strict'

const express = require('express');
const app = express();

var path = require('path');


//Configure port
var puerto = 5014;

//App directories
var PROJECT_DIR = path.normalize(__dirname);
app.set('port', (process.env.PORT || puerto))
app.start = app.listen(app.get('port'), function () {
    console.log('Escuchando en el puerto http://localhost:'+ puerto + '/UI');

});


app.use('/', express.static(path.join(PROJECT_DIR, '')));



module.exports = app;