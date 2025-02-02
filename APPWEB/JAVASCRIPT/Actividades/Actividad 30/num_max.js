document.addEventListener("DOMContentLoaded", function(){
    function max(arr) {
        let maxNum = arr[0]; // Inicializar con el primer elemento del arreglo
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] > maxNum) {
                maxNum = arr[i]; // Actualizar el número máximo si se encuentra uno mayor
            }
        }
        return maxNum;
    }
    
    // Código de prueba
    console.log(max([3, 9, 6])); // 9
    console.log(max([67, 35, 54, 26])); // 67
    console.log(max([5, 9, 2, 4, 5, 7])); // 9
    
})