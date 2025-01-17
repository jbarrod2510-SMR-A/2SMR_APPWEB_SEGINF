// Función para encontrar el número más grande en un array
function findLargestNumber(numbers) {
    let maxNumber = numbers[0]; // Inicializa el máximo con el primer elemento
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]; // Actualiza el máximo si encuentra un número mayor
        }
    }
    return maxNumber;
}

// Solicita al usuario la cantidad de números
const cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"), 10);

if (isNaN(cantidad) || cantidad <= 0) {
    alert("Por favor, ingresa un número entero positivo válido.");
} else {
    const numeros = [];
    for (let i = 0; i < cantidad; i++) {
        const numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        if (!isNaN(numero)) {
            numeros.push(numero);
        } else {
            alert("Por favor, ingresa un valor numérico válido.");
            i--; // Reintenta la entrada para el número actual
        }
    }

    const maximo = findLargestNumber(numeros);
    alert(`El número más grande en la lista es: ${maximo}`);
}
