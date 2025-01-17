// Función para calcular el factorial de un número
function calculateFactorial(number) {
    let result = 1; // Inicializa en 1 porque el factorial de 0 y 1 es 1
    for (let i = 1; i <= number; i++) {
        result *= i; // Multiplica el resultado por el número actual
    }
    return result;
}

// Solicita al usuario ingresar un número
const input = parseInt(prompt("Ingresa un número entero no negativo para calcular su factorial:"), 10);

if (isNaN(input) || input < 0) {
    alert("Por favor, ingresa un número entero no negativo válido.");
} else {
    const factorial = calculateFactorial(input);
    alert(`El factorial de ${input} es ${factorial}.`);
}
