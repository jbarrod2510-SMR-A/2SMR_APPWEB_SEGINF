document.addEventListener("DOMContentLoaded", function(){

    // Declarar la función
    function contarRango(inicio, fin) {
        let contador = 0;
        for (let i = inicio + 1; i < fin; i++) {
            contador++;
        }
        return contador;
    }
    
    // Ejemplo de uso
console.log(contarRango(3, 10)); // Salida: 6
console.log(contarRango(1, 9)) // 7
console.log(contarRango(1332, 8743)) // 7410
console.log(contarRango(5, 6)) // 0    
})