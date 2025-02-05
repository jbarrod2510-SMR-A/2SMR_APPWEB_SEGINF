function toggleBox(){
    if(box.style.display == "none"){
        box.style.display == "block";
        button.textContent = "Ocultar la caja";
    }else{
        box.style.display = "none";
        button.textContent = "Mostrar caja";
    }
}

const box = document.querySelector(".cuadrado");
const button = document.querySelector(".ocultar");


button.addEventListener("click", toggleBox);
