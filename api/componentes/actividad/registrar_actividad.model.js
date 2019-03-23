'use strict';
const mongoose = require('mongoose');

let schema_actividad = new mongoose.Schema(
    {
        actividad : {type : String, required : true},
        fecha : {type : String, required: true},
        hora_inicio : {type: String, required: true},
        finaliza : {type: String, required: true},
        costo : {type : String, required : true},
        lugar : {type : String, required: true},
        finalidad : {type: String, required: true},
        detalles : {type: String, required: true}
    }
);

module.exports = mongoose.model('Actividad', schema_actividad);