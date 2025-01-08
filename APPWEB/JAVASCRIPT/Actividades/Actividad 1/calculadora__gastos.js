// Objetivo: a partir de los datos introducidos por el usuario, crea una calculadora de gastos

// Datos de entrada del usuario
const gastos__alojamiento = parseFloat(prompt("Introduce los gastos de alojamiento de tu viaje "));
const gastos__alimentación = parseFloat(prompt("Introduce los gastos de alimentación de tu viaje "));
const gastos__entretenimiento = parseFloat(prompt("Introduce los gastos de entretenimiento de tu viaje "));

// Suma de los gastos
const suma = gastos__alimentación + gastos__alojamiento + gastos__entretenimiento;
// Mostramos información al usuario
alert("El coste total del viaje es " + suma)