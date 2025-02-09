const colors = ["red", "yellow", "green", "purple", "pink", "blue", "brown", "orange", "gray", "greenyellow", "aqua",
    "cyan", "magenta", "gold", "silver", "teal", "lime", "maroon", "navy", "olive"];

const button = document.querySelector(".click");
const backgroundText = document.querySelector(".background");
const mainSection = document.querySelector("main"); // Seleccionamos el <main> en lugar del body

button.addEventListener("click", function () {
let randomIndex = Math.floor(Math.random() * colors.length);
let randomColor = colors[randomIndex];

mainSection.style.backgroundColor = randomColor; // Cambiamos el color solo del <main>
backgroundText.innerHTML = `Background color: <span style="color: ${randomColor}; font-weight: bold;">${randomColor.charAt(0).toUpperCase() + randomColor.slice(1)}</span>`;
});
