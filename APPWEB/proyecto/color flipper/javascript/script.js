const colors = ["red", "yellow", "green", "purple", "pink", "blue", "brown", "orange", "gray", "greenyellow", "aqua",
    "cyan", "magenta", "gold", "silver", "teal", "lime", "maroon", "navy", "olive"];

const button = document.querySelector(".click");
const background = document.querySelector(".background");
const body = document.body;
    
button.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
        
    body.style.backgroundColor = randomColor;
    background.textContent = `Background Color: ${randomColor}`;
    });