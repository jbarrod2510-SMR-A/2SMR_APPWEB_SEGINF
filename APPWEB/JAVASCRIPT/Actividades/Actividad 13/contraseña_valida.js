document.addEventListener("DOMContentLoaded", function(){
    // Definición de funciones
    function contraseña_valida(cadenaTexto){
        if (cadenaTexto == "2fj(jjbFsuj" || cadenaTexto == "eoZiugBf&g9"){
            return true;
        }
    
        return false;
    }
    // Main
    // Código de prueba
    console.log(contraseña_valida("2Fj(jjbFsuj"))   // true
    console.log(contraseña_valida("eoZiugBf&g9"))   // true
    console.log(contraseña_valida("hola")) // false
    console.log(contraseña_valida("")) // false
})