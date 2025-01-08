document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el párrafo y agrega el evento click
    var parrafo = document.querySelector("p");
    parrafo.addEventListener("click", function() {
        alert("¡Hola Mundo!");
    });

    console.log("Hola__klk__peñita")
    // Number: Representa valores numéricos
var numeroEntero = 5;
var numeroDecimal = 3.14;
var numeroNegativo = -10;

console.log("Número Entero:", numeroEntero);
console.log("Número Decimal:", numeroDecimal);
console.log("Número Negativo:", numeroNegativo);

// String: Representa datos de texto
var saludo = 'Hola';
var despedida = "Mundo";

console.log("Saludo:", saludo);
console.log("Despedida:", despedida);

// Boolean: Representa un valor lógico (true o false)
var esVerdadero = true;
var esFalso = false;

console.log("Es Verdadero:", esVerdadero);
console.log("Es Falso:", esFalso);

// Null: Representa la ausencia intencional de cualquier valor
var valorNulo = null;

console.log("Valor Nulo:", valorNulo);

// Undefined: Representa un valor no definido
var valorNoDefinido;

console.log("Valor No Definido:", valorNoDefinido);
});

// Object: Representa un objeto con propiedades
var persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'EjemploCity'
  };
  
  console.log("Objeto Persona:", persona);
  
  // Array: Representa una colección ordenada de valores
  var frutas = ['manzana', 'naranja', 'plátano'];
  
  console.log("Array de Frutas:", frutas);
  
  // Function: Representa una función reutilizable
  function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  saludar("Andrea");
  
  // Date: Representa una fecha y hora específicas
  var fechaActual = new Date();
  
  console.log("Fecha Actual:", fechaActual);
  
  /* RegExp: Representa una expresión regular para buscar patrones
  /: Delimitadores de la expresión regular.
  java: Coincide literalmente con la cadena "java".
  (script)?: Grupo de captura opcional. Puede coincidir con "script" cero o una vez.
  i: Modificador de la expresión regular que hace que la coincidencia sea insensible a mayúsculas y minúsculas.
  Por lo tanto, esta expresión regular buscará "java" seguido opcionalmente por "script" en una cadena de texto, y la búsqueda no será sensible a mayúsculas y minúsculas. Esto significa que coincidirá con "java", "JavaScript" o "javaSCRIPT", entre otras posibles variaciones.*/
  var patron = /java(script)?/i;
  
  console.log("Expresión Regular:", patron);