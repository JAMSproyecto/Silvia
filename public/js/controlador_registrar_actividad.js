'use strict';
const input_actividad = document.querySelector('#txt_actividad');
const input_fecha = document.querySelector('#txt_fecha');
const input_hora_inicio = document.querySelector('#txt_hora_inicio');
const input_finaliza = document.querySelector('#txt_finaliza');
const input_costo = document.querySelector('#txt_costo');
const input_lugar = document.querySelector('#txt_lugar');
const input_finalidad = document.querySelector('#txt_finalidad');
const input_detalles = document.querySelector('#txt_detalles');
const boton_enviar = document.querySelector('#btn_enviar');
   


let validar = () => {

    let error = false;

    if (input_actividad.value == '') {
        input_actividad.classList.add('error_input');
        error = true;
    } else {
        input_actividad.classList.remove('error_input');

    }


    if (input_fecha.value == '') {
        input_fecha.classList.add('error_input');
        error = true;
    } else {
        input_fecha.classList.remove('error_input');
    }


    if (input_hora_inicio.value == '') {
        input_hora_inicio.classList.add('error_input');
        error = true;
    } else {
        input_hora_inicio.classList.remove('error_input');

    }


    if (input_finaliza.value == '') {
        input_finaliza.classList.add('error_input');
        error = true;
    } else {
        input_finaliza.classList.remove('error_input');

    }


    if (input_costo.value == '') {
        input_costo.classList.add('error_input');
        error = true;
    } else {
        input_costo.classList.remove('error_input');

    }


    if (txt_lugar.value == '') {
        txt_lugar.classList.add('error_input');
        error = true;
    } else {
        txt_lugar.classList.remove('error_input');
    }

    if (txt_finalidad.value == '') {
        txt_finalidad.classList.add('error_input');
        error = true;
    } else {
        txt_finalidad.classList.remove('error_input');
    }


    if (txt_detalles.value == '') {
        txt_detalles.classList.add('error_input');
        error = true;
    } else {
        txt_detalles.classList.remove('error_input');
    }
    return error;
};

let mostrarDatos = () => {


    if (validar() == true) {
        Swal.fire({
            type: 'warning',
            title: 'Validación Incorrecta',
            text: 'Por favor revise los espacios resaltados en rojo'
        })
    }
    else {


        Swal.fire({
            type: 'success',
            title: 'Mensaje enviado con éxito',
            text: `La nueva actividad fue registrada con éxito`
        });
    }


};


boton_enviar.addEventListener('click', mostrarDatos);



