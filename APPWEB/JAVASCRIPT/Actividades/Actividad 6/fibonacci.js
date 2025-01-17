document.addEventListener("DOMContentLoaded", function(){
    // Declaración de funciones
    function fibonacci(num_ele){

        let f0 = 0;
        let f1 = 1;
        let lst_fib = [f0, f1];
        const n = lst_fib.length;
        for(let i=0; i<num_ele;i++){
            let fn = f0+f1;
            lst_fib.push(fn); /*Introducimos el termino de la sucesión en fn*/
            //Actualizamos los valores de las variables 
            f0 = f1;
            f1=fn;

        }
        return lst_fib;
    }

    // Parte principal
    const num_ele_usr = parseInt(prompt("Introduce cuantos términos de la sucesión de fibonacci quieres"))
    alert("Los primeros" + num_ele_usr + " términos de la secuencia Fibonacci son: " + fibonacci(num_ele_usr))
})