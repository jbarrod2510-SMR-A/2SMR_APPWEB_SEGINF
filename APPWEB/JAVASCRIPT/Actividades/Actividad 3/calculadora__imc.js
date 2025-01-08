// Objetivo: a partir de los datos introducidos por el usuario, crea una calculadora de IMC

// Datos de entrada del usuario
const peso = parseFloat(prompt("Introduce tu peso "));
const altura = parseFloat(prompt("Introduce tu altura "));

// Suma de los datos
const IMC = peso / altura**2;

// Mostramos información al usuario

if (IMC < 18.5) {
    alert("Tu IMC es de" + IMC.toFixed(2) + "Clasificación peso bajo");
} else if (IMC >= 18.5 && IMC <24.9){
    alert("Tu IMC es de" + IMC.toFixed(2) + "Clasificación normal");
} else if (IMC >=25 && IMC <29.9) {
    alert("Tu IMC es de" + IMC.toFixed(2) + "Clasificación sobrepeso");
} else {
    alert("Tu IMC es de" + IMC.toFixed(2) + "Clasificación obesidad");
}
