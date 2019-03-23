'use strict';

const model_registrar_actividad = require('./registrar_actividad.model');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'soporte.mep.costarica@gmail.com',
      pass: '1Proyecto9'
    }
});

module.exports.registrar = (req, res) =>{
    let actividad_nueva = new model_registrar_actividad(
        {
            actividad : req.body.actividad,
            fecha: req.body.fecha,
            hora_inicio : req.body.hora_inicio,
            finaliza : req.body.finaliza,
            costo: req.body.costo,
            lugar: req.body.lugar,
            finalidad: req.body.finalidad,
            detalles: req.body.detalles
        }
    );
    
    actividad_nueva.save(
        function(error){
            if(error){
                res.json(
                    {
                        success : false,
                        msg : `No se pudo guardar el comentario ocurrió el siguiente error ${error}`
                    }
                )
            }else{
                let mailOptions = {
                    from: 'soporte.mep.costarica@gmail.com',
                    to: 'srodriguezh@ucenfotec.ac.cr',
                    subject: 'Actividad Registrada',
                    html: `<h1 style="color:#6F1E51;"> La actividad fue registrada con éxito en el 
                    perfil de su Institución</h1>
                    <p>Gracias</p>
                    
                    `
                };
                transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
                res.json(
                    {
                        success : true,
                        msg : `Se registró atividad de forma correcta`
                    }
                )
            }
        }

    );
};



module.exports.listar_todos = (req ,res) =>{
    model_actividad.find().then(
        function(actividades){
            if(actividades.length > 0){
                res.json(
                    {
                        success: true,
                        actividades: actividades
                    }
                )
            }else{
                res.json(
                    {
                        success: false,
                        comentarios: 'No se encontraron actividades'
                    }
                )
            }
        }

    )
};