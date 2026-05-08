console.log("mensaje desde script.js");

let nombre = "Juan";
let edad = 20;
let aprovado = true;

const pi = 3.1416;
/** 
if (edad >= 18 && edad < 30)  {
    console.log(nombre + " vienes a la fiesta");
} else {
    console.log(nombre + " no vienes a la fiesta");
}
    */
function saludo() {
    console.log("Hola " + nombre + " de " + edad + " años");
}

//uso del DOM
let elementoValida = document.getElementById("valida");


let boton = document.getElementById("btnprueba");
boton.addEventListener("click", function() {
    elementoValida.textContent = "Valor modificado";
    console.log("Modificando el texto del párrafo");
    alert("Has pulsado el botón y se ha modificado el texto del párrafo");
});