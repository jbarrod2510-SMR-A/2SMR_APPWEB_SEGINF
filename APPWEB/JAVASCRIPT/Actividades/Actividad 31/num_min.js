document.addEventListener("DOMContentLoaded", function(){
    function min(arr) {
        let minNum = arr[0]; // Inicializar con el primer elemento del arreglo
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minNum) {
                minNum = arr[i]; // Actualizar el número minimo si se encuentra uno menor
            }
        }
        return minNum;
    }
    
    // Código de prueba
    console.log(min([3, 9, 6])); // 3
    console.log(min([67, 35, 54, 26])); // 26
    console.log(min([5, 9, 2, 4, 5, 7])); // 2
    
})