// Función para convertir de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Función para convertir de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

// Función principal
function main() {
    // Solicitar tipo de conversión al usuario
    const eleccion = prompt(
        "¿Qué tipo de conversión deseas realizar?\n1: Celsius a Fahrenheit\n2: Fahrenheit a Celsius"
    );

    if (eleccion === "1") {
        // Celsius a Fahrenheit
        const celsius = parseFloat(prompt("Ingresa la temperatura en grados Celsius:"));
        const resultado = celsiusAFahrenheit(celsius);
        alert(`${celsius} grados Celsius equivalen a ${resultado.toFixed(2)} grados Fahrenheit.`);
    } else if (eleccion === "2") {
        // Fahrenheit a Celsius
        const fahrenheit = parseFloat(prompt("Ingresa la temperatura en grados Fahrenheit:"));
        const resultado = fahrenheitACelsius(fahrenheit);
        alert(`${fahrenheit} grados Fahrenheit equivalen a ${resultado.toFixed(2)} grados Celsius.`);
    } else {
        alert("Elección inválida. Por favor selecciona 1 o 2.");
    }
}

// Ejecutar la función principal
main();
