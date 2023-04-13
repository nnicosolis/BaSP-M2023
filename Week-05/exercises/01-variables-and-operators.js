//1. Variables and operators
// a. Create two numeric variables and use the addition operator to store the value of the sum of both numbers in a 
//    third variable.
var a = 3;
var b = 5;
var suma = a+b;
console.log('La suma de ' + a + ' + ' + b + ' es igual a ' + suma);

//b. Create two variables of type String and concatenate them, saving the result in a third variable.
var saludo = 'Buenas tardes ';
var nombre = 'Miguel';
var frase = saludo + nombre;
console.log(frase);

//c. Create two variables of type String and add the length of each variable (number of characters in the string), 
//saving the result of the sum in a third variable (using length).
var str1 = 'Campeón';
var str2 = 'Mundial';
var largoTotal = str1.length + str2.length;
console.log('La cantidad de letras de ambas cadenas es : ' + largoTotal);