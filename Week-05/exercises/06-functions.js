// 6. Functions
// a. Create a sum function that receives two numerical values and returns the result. Execute the function and save 
// the result in a variable, displaying the value of that variable i the browser console
var a = 10, b = 12, c;
function suma (a,b) {
    var resultado = a+b;
    return resultado;
}
c = suma(a,b);
console.log(c);

// b. Copy the previos sum function and add a validation to control if any of the parameters is not a number. If it's
//   not a number, show an alert indicating that one of the parameters has an error and return NaN as the result.
function sumaValidate (a,b) {
    if(isNaN(a)||isNaN(b)){
        alert('One of the parameters is not a number');
        return NaN;
    } else {
        var resultado = a+b;
        return resultado;
    }
}

// c. Create a function "validateInteger" that receives a number as a parameter and return true if it is an integer 
//    number.
function validateInteger (a){
    return  a % 1 === 0;
}

// d. Copy and rename the sum function from exercise 6b) and add a call to the "validateInteger" function from 
// exercise 6c) to validate that both parameters are integers. If there are decimal places, show an alert with the
// error and return the number rounded to the nearest integer.
function validationD (a,b){
    if(isNaN(a)||isNaN(b)){
        alert('One of the parameters is not a number');
        return NaN;
    } else {
        if(validateInteger(a)==false||validateInteger(b)==false){
            if(validateInteger(a)==false){
                alert('There are decimals')
                var valorCorregido = Math.round(a);
                return valorCorregido
            } else {
                alert('There are decimals');
                var valorCorregido = Math.round(b);
                return valorCorregido;
            }
        } else {
            return a+b;
        }
    } 
}

// e. Convert the validation from exercise 6d) into a separate function and call it within a new function, testing that
// everything still works the same as in the previous section.
function validationE(a,b){
    var res = validationD(a,b);
    return res;
}