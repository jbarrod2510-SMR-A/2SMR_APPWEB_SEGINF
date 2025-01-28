document.addEventListener("DOMContentLoaded", function(){

    // Declarar la función
    function fizzBuzz(num){

        if (num % 3 === 0 && num % 5 === 0) {
            return "fizzbuzz"
        }else if (num % 3 === 0) {
            return "fizz";
        }else if (num % 5 === 0) {
            return "buzz";
        }else {
            return num;
        }
    }

// Parte principal llamada a la función
console.log(fizzBuzz(6)); // "fizz"
console.log(fizzBuzz(20)); // "buzz"
console.log(fizzBuzz(30)); // "fizzbuzz"
console.log(fizzBuzz(8)); // 8
})