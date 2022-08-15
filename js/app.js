function obtenerHora(){
    let fechaActual = new Date();
    let diaSemanas = ['Domingo', 'Lunes', 'Martes', 'Miercoles','Jueves','Viernes', 'Sabado'];
    let meses = ['Enero', 'Febrero', 'Marzo', 'Abril','Mayo','Junio', 'Julio','Agosto','Septiembre', 'Octubre','Noviembre','Diciembre'];
    
    let parrafoFecha = document.querySelector('#fecha');
    parrafoFecha.innerHTML = `${diaSemanas[fechaActual.getDay()]} ${fechaActual.getDate()} de ${meses[fechaActual.getMonth()]} del ${fechaActual.getFullYear()}`;
    let parrafoHora = document.querySelector('#hora');

    let segundos = fechaActual.getSeconds();
    if(segundos <10){
        segundos = '0' + segundos
    }
    let horas = fechaActual.getHours();
    if(horas > 12) {
        horas = horas - 12;
        ampm = "PM"    
    } else {
        ampm = "AM";
    } if (horas == 0) {
        horas == 12;
    } if (horas > 0 && horas < 10); {
        horas = "0" + horas
    }

    parrafoHora.innerHTML = `${horas}:${fechaActual.getMinutes()}:${segundos} ${ampm}`
}

setInterval(obtenerHora,1000);

function temaClaro(){
    let body = document.querySelector('#body')
    body.className = 'claro'
}
function temaOscuro(){
    let body = document.querySelector('#body')
    body.className = 'oscuro'
}
function fondoAzul(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoAzul titulo'
}
function fondoRosa(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoRosa titulo'
}
function fondoVerde(){
    let sectionContenedor = document.querySelector('#sectionContenedor')
    sectionContenedor.className = 'fondoVerde titulo'
}

