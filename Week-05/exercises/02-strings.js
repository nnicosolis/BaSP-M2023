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

//d. Create a variable of type String with at least 10 characters and generate a new string with the first letter in
//   uppercase and the rest in lowercase. Save the result in a new variable (using substring, toUpperCase, toLowerCase, 
//   and the + operator).
var strD = 'string methods';
var newStrD = strD.substring(0,1).toUpperCase() + strD.substring(1,strD.length);
console.log(newStrD);

//e. Create a variable of type String with at least 10 characters and a white space. Find the position of the first 
//   white space and save it in a variable (using indexOf).
var strE = 'Champions League';
var firstSpaceIndex = strE.indexOf(' ');
console.log(firstSpaceIndex);

//f. Create a variable of type String with at least 2 long words (10 characters and some space in between). Use the 
//methods from previous exercises to generate a new string that has the first letter of both words in uppercase and the 
//rest in lowercase (using indexOf, substring, toUpperCase, toLowerCase, and the + operator).
var strF = 'flawless victory';
var firstSpaceF = strF.indexOf(' ');
var newStrF = strF[0].toUpperCase() +strF.substring(1,firstSpaceF) +' '+ strF[firstSpaceF+1].toUpperCase() + strF.substring(firstSpaceF+2,strF.length);
console.log(newStrF);
//It only works if there are no spaces before the first word!