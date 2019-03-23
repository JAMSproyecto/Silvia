'use strict';
const express = require('express');
const router =  express.Router();
const registrar_actividad_api = require('./registrar_actividad.api');

router.route('/registrar_actividad')
    .post(
        function(req, res){
            registrar_actividad.api.registrar(req, res);
        }
    );

router.route('/listar_comentarios')
        .get(
            function(req, res){
                registrar_actividad_api.listar_todos(req, res);
            }
        )

module.exports = router;