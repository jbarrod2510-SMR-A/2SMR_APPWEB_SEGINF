function toggleBox(){
    if(caja.style.display == "none"){
        caja.style.display == "block";
        boton.textContent = "Ocultar la caja";
    }else{
        caja.style.display = "none";
        boton.textContent = "Mostrar caja";
    }
}

const caja = document.querySelector(".cuadrado");
const boton = document.querySelector(".ocultar");


button.addEventListener("click", toggleBox);
