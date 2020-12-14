$(document).ready(() => {
    setInterval(() => {
        var tiempoActual = moment().format("hh:mm:ss")
        $("#reloj").text(tiempoActual)
    },500)
})