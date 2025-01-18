// Imprimir los números del 20 al 30 en la consola
for (let i = 20; i <= 30; i++) {
    console.log(i);
}

// Imprimir los números pares del 30 al 50 en la consola
for (let i = 30; i <= 50; i += 2) {
    console.log(i);
}

// Calcular la suma de los primeros 50 números naturales
let suma = 0;
for (let i = 1; i <= 50; i++) {
    suma += i;
}
console.log("La suma de los primeros 50 números naturales es:", suma);

// Imprimir la tabla de multiplicar del 8
for (let i = 1; i <= 10; i++) {
    console.log(`8 x ${i} = ${8 * i}`);
}

// Imprimir los elementos de un array
const array = [10, 20, 30, 40, 50];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Imprimir un patrón de asteriscos en forma de triángulo, con altura 9
const altura = 9;
for (let i = 1; i <= altura; i++) {
    console.log('*'.repeat(i));
}

// Calcular la suma de los números pares del 1 al 50
let sumaPares = 0;
for (let i = 2; i <= 50; i += 2) {
    sumaPares += i;
}
console.log("La suma de los números pares del 1 al 50 es:", sumaPares);

// Imprimir los números del 30 al 20 en orden descendente
for (let i = 30; i >= 20; i--) {
    console.log(i);
}
const numeros = [10, 20, 30, 40, 50];
let sumaArray = 0;

// Calcular el promedio de un array de números
for (let i = 0; i < numeros.length; i++) {
    sumaArray += numeros[i];
}
const promedio = sumaArray / numeros.length;
console.log("El promedio del array es:", promedio);