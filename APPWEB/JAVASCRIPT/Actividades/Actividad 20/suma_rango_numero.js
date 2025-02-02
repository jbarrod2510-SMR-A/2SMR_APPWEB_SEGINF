document.addEventListener("DOMContentLoaded", function(){
    // Declarar la función
    function sumarRango(inicio, fin) {
        let suma = 0;
        for (let i = inicio; i <= fin; i++) {
            suma += i;
        }
        return suma;
    }

    // Código principal
    console.log(sumarRango(0, 10)) // 55
    console.log(sumarRango(12, 14)) // 39
    console.log(sumarRango(5, 5)) // 0
})