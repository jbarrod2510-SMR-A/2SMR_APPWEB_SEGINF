document.addEventListener("DOMContentLoaded", function(){

    /*Declaración de la función*/
    function findLargestNumber(array){
        max = array[0];
        for(let i = 0; i<array.length; i++){
            if(max < array[i])
                max = array[i];
        }
        return max;
    }
    
    /*Datos de entrada y variables auxiliares*/
    const num = parseInt(prompt("Introduce la cantidad de numeros que quieres introducir"));
    let lista = [];
    
    /*Creación de array con datos de entrada del usuario*/
    for(let i = 0; i < num; i++){
        const n = parseFloat(prompt("Introduce un numero"));
        lista.push(n);
    }
    
    /*Llamada a la función findLargestNumber*/
    alert("El numero más gran del array " + lista + " es " + findLargestNumber(lista));
    
});