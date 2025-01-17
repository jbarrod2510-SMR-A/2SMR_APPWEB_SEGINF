// Objetivo: a partir de los datos introducidos por el usuario, crea un generador de números primos

document.addEventListener("DOMContentLoaded", function(){
    // Declaración de funciones
    function esPrimo(num){
        for (let i =2; i < num; i++){
            if(num % i == 0){
                return false; 
            }
        }

        return true;
    }
    // Datos de entrada del usuario    
    const num1 = parseInt(prompt("Introduce un número entero"));
    const num2 = parseInt(prompt("Introduce el otro número entero"));
    
    // Parte principal
    let max, min;
    let lst_num = []
    if (num1>= num2){
        max=num1;
        min=num2;
    }else{
        max=num2;
        min=num1;
    }

    for (let i = min; i <= max; i++){
        if(esPrimo(i)){
            lst_num.push(i);
        }
    }

    console.log(lst_num);

});





// Mostramos información al usuario

