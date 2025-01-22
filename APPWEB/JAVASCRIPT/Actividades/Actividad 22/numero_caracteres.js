document.addEventListener("DOMContentLoaded", function(){

    // Funciones
    function numeroDeCaracteres(string, char){
        cont = 0;
        for (let i=0; i < string.length; i =i +1){
            if (string[i] ==char){
                cont = cont +1;
            }
        }
        return cont;

    }
    // Llamada a la función
    console.log(numeroDeCaracteres("Hola Mundo", "o")) // 2
    console.log(numeroDeCaracteres("MMMMM", "m")) // 0
    console.log(numeroDeCaracteres("eeee", "e")) // 4


})