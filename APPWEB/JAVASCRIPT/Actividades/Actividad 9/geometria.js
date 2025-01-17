// Función para calcular el área de un círculo
function calcularArea(radio) {
    return Math.PI * Math.pow(radio, 2);
}

// Función para calcular el perímetro de un círculo
function calcularPerimetro(radio) {
    return 2 * Math.PI * radio;
}

// Solicita al usuario ingresar el radio del círculo
const radio = parseFloat(prompt("Ingresa el radio del círculo:"));

if (isNaN(radio) || radio <= 0) {
    alert("Por favor, ingresa un valor numérico válido para el radio.");
} else {
    const area = calcularArea(radio);
    const perimetro = calcularPerimetro(radio);
    alert(`Para un círculo con radio ${radio}:\n- Área: ${area.toFixed(2)}\n- Perímetro: ${perimetro.toFixed(2)}`);
}
