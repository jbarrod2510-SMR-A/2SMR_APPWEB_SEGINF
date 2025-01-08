// Objetivo: a partir de los datos introducidos por el usuario, crea una calculadora de descuentos

// Datos de entrada del usuario
const precio = parseFloat(prompt("Introduce el precio "));
const descuento = parseFloat(prompt("Introduce el descuento "));

// Calculo de los datos
const precio_descuento = (precio*descuento)/100;

// Mostramos información al usuario
alert("El precio final es de " + (precio-precio_descuento));
