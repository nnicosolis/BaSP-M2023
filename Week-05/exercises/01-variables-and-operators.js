//1. Variables and operators
// a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos números en una 3er variable.
var a = 3;
var b = 5;
var suma = a+b;
console.log('La suma de ' + a + ' + ' + b + ' es igual a ' + suma);

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.
var saludo = 'Buenas tardes ';
var nombre = 'Miguel';
var frase = saludo + nombre;
console.log(frase);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la suma en una 3er variable (utilizar length).
var str1 = 'Campeón';
var str2 = 'Mundial';
var largoTotal = str1.length + str2.length;
console.log('La cantidad de letras de ambas cadenas es : ' + largoTotal);