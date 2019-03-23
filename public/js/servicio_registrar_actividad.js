'use strict';

let registrar_comentario = (pactividad, pfecha, phora_inicio, pfinaliza, pcosto,
    plugar, pfinalidad, pdetalles) => {
    let request = $.ajax({
        url: "http://localhost:4000/api/registrar_comentario",
        method: "POST",
        data: {
            actividad: pactividad,
            fecha: pfecha,
            hora_inicio: phora_inicio,
            finaliza: pfinaliza,
            costo: pcosto,
            lugar: plugar,
            finalidad: pfinalidad,
            pdetalles,

        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8'
    });

    request.done(function (msg) {
        swal.fire({
            type: 'success',
            title: 'La actividad fue registrada con éxito',
            text: `La nueva actividad fue registrada con éxito`
        });
    });

    request.fail(function (jqXHR, textStatus) {
        swal.fire({
            type: 'error',
            title: 'La actividad no pude ser registrada',
            text: 'Ocurrió un error inesperado, por favor intente de nuevo'
        });
    });
};

let listar_comentarios = () => {
    let lista_comentarios = [];

    let request = $.ajax({
        url: "http://localhost:4000/api/listar_comentarios",
        method: "GET",
        data: {
        },
        dataType: "json",
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        async: false
    });

    request.done(function (res) {
        lista_comentarios = res.comentarios;

    });

    request.fail(function (jqXHR, textStatus) {

    });
    return lista_comentarios;


};