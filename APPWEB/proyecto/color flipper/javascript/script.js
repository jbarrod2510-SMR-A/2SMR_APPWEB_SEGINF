document.addEventListener("DOMContentLoaded", function(){
    const boton = document.querySelector(".click");
    const titulo = document.querySelector(".background");

    
    const colors = ["red", "yellow", "green", "purple", "pink", "blue", "brown", "orange", "gray", "greenyellow", "aqua",
    "cyan", "magenta", "gold", "silver", "teal", "lime", "maroon", "navy", "olive"];

    function coloresRandom(){
        return colors[Math.floor(Math.random() * colors.length)];
    }

    boton.addEventListener("click", function(){
        const colorNuevo = coloresRandom();
        document.body.style.backgroundColor= colorNuevo;
        titulo.textContent = `Background Color: ${colorNuevo}`;
        titulo.style.color = colorNuevo;
        boton.style.backgroundColor = colorNuevo
    })
})