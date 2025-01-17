// Función para calcular la potencia
function calculatePower(base, exponent) {
    return Math.pow(base, exponent); // Eleva la base al exponente
}

// Ejemplo de uso
const base = parseFloat(prompt("Ingresa la base:"));
const exponent = parseFloat(prompt("Ingresa el exponente:"));

if (isNaN(base) || isNaN(exponent)) {
    alert("Por favor, ingresa valores numéricos válidos.");
} else {
    const result = calculatePower(base, exponent);
    alert(`El resultado de ${base} elevado a la potencia ${exponent} es ${result}.`);
}
