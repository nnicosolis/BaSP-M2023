// 2. Strings
// a. Create a variable of type String with at least 10 characters and convert all the text to uppercase (using 
//    toUpperCase).
var str = 'Become a Software Professional';
var strUpper = str.toUpperCase();
console.log(strUpper);

//b. Create a variable of type String with at least 10 characters and generate a new string with the first 5 
//   characters, saving the result in a new variable (using substring).
var strB = 'Creating a variable of type String';
var newStrB = strB.substring(0,5);
console.log(newStrB);

//c. Create a variable of type String with at least 10 characters and generate a new string with the last 3 characters,
// saving the result in a new variable (using substring).
var strC = 'Using the substring method';
var newStrC = strC.substring((strC.length-3),strC.length);
console.log(newStrC);