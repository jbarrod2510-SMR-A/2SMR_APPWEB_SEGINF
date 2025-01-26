document.addEventListener("DOMContentLoaded", function(){

    // Definición de funciones
    
    function imc(peso, altura){
        bmi = peso / altura**2
        if(bmi <= 18.5){
            return ("Bajo de peso");
        }else if(bmi>18.5 && bmi<=24.9){
            return ("Normal");
        }else if(bmi > 25 && bmi<=29.9){
            return ("Sobrepeso")
        }else if(bmi>=30){
            return ("obeso")
        }
    }

    // Parte principal (main) --- Llamada a la función
    console.log(imc(65, 1.8)) // "Normal"
    console.log(imc(72, 1.6)) // "Sobrepeso"
    console.log(imc(52, 1.75)) //  "Bajo de peso"
    console.log(imc(135, 1.7)) // "Obeso"
})