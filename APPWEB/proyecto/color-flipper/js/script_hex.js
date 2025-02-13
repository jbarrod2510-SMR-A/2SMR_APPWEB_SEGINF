document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".boton"); // Selecciona la clase boton
    const title = document.querySelector(".titulo"); // Selecciona la clase titulo

    function getRandomColor() { // Declara la función
        const letters = "0123456789ABCDEF"; // Se declara una variable con todos los posibles valores que puede tener el código hexadecimal
        let color = "#"; // Se declara una variable con el simbolo #, ya que es el que tienen todos los codigos hexadecimales
        for (let i = 0; i < 6; i++) {  // Un bucle for que selecciona 6 caracteres de la variable letters
            color += letters[Math.floor(Math.random() * 16)]; 
        }
        return color; // Se devuelve un color en formato hexadecimal
    }

    button.addEventListener("click", function () { //Crea un evento cuando se haga click en boton
        const newColor = getRandomColor(); // Se crea la variable new color para que coja el valor de la función que hemos declarado antes
        document.body.style.backgroundColor = newColor; // El color de fondo del body cambia por el de newColor
        title.textContent = "Background color: " + newColor; // El contenido del titulo cambia por el de Background color: y el codigo hexadecimal que ha generado nuestra función
        button.style.backgroundColor = newColor; // El color del fondo del boton al color que corresponde el código hexadecimal que se ha generado
    });
});