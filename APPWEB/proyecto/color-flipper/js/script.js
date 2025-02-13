document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".boton"); // Selecciona la clase boton
    const title = document.querySelector(".titulo"); // Selecciona la clase titulo
    const colores = [
        "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Pink", "Brown", 
        "Cyan", "Magenta", "Lime", "Yellowgreen", "Aqua", "Olive", "Teal", "Turquoise", 
        "Violet", "Gold", "Silver", "Coral"
    ]; // Array con los colores
    function getRandomColor() {  // Declara la función
        return colores[Math.floor(Math.random() * colores.length)];  // Genera los colores de forma aleatoria
    }
    button.addEventListener("click", function () {  //Crea un evento cuando se haga click en boton
        const newColor = getRandomColor();  // Se crea la variable new color para que coja el valor de la función que hemos declarado antes
        document.body.style.backgroundColor = newColor;  // Cambia el color de fondo del body por el seleccionado aleatoriamente
        title.textContent = "Background color: " + newColor;  // Cambia el contenido del titulo por Background color y el nuevo color
        title.style.color = newColor; // Cambia el estilo de color que se usa en el titulo por el seleccionado aleatorimente
        button.style.backgroundColor = newColor; // Cambia el color de fondo del boton por el seleccionado aleatoriamente
    });
});
