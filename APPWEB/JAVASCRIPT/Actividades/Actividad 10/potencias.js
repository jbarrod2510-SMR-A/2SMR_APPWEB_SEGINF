document.addEventListener("DOMContentLoaded")
// Función para calcular la potencia
function calculatePower(base, exponent) {
    let pow = 1;
    for(let i = 0; i < exponent; i++){
        pow = pow * base;
    }
    return pow;
}
console.log(calculatePower(2,3));
