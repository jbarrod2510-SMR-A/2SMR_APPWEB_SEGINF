// Objetivo: a partir de los datos introducidos por el usuario, crea una calculadora de gastos

// Datos de entrada del usuario
const num1 = parseFloat(prompt("Introduce el primer numero "));
const num2 = parseFloat(prompt("Introduce el segundo numero "));
const num3 = parseFloat(prompt("Introduce el tercer numero "));

// Suma de los gastos
const suma_arreglo = num1 + num2 +num3;
// Mostramos información al usuario
alert("El coste total del viaje es " + suma_arreglo)