// 3. Arrays
// a. Given the following array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", 
//    "Septiembre", "Octubre", "Noviembre", "Diciembre"] display months 5 and 11 on the console (using console.log).
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];
console.log(meses[4]);
console.log(meses[10]);

// b. Sort the array of months alphabetically and display it on the console (using sort).
var mesesB = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];
var mesesOrdenados = meses.sort();
console.log(mesesOrdenados);

// c. Add an element to the beginning and end of the aray (using unshift and push).
var mesesC = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];

mesesC.unshift('Messi');
mesesC.push('Julián');
console.log(mesesC);

// d. Remove an element from the beginning and end of the array(using shift and pop).
var mesesD = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];

mesesD.shift();
mesesD.pop();
console.log(mesesD);

// e. Invert the order of the array (using reverse).
var mesesE = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];
var mesesInvertidos = mesesE.reverse();
console.log(mesesInvertidos);

// f. Join all elements of the array into a single string where each month is separated by a dash - (using join).
var mesesF = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];
var strMeses = mesesF.join('-');
console.log(strMeses);

//g. Create a copy of the months array that contains from May to November (using slice).
var mesesG = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
            "Noviembre", "Diciembre"];
var mayoNoviembre = mesesG.slice(4,11);
console.log(mayoNoviembre);