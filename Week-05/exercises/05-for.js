// 5. For
// a. Create an array containing 5 words and traverse the array using a JavaScript for loop to display an alert using 
// each of the words.
var arrA = ['premier','serie A', 'la liga', 'bundesliga','ligue 1'];
for(var i=0; i<arrA.length;i++){
    alert(arrA[i]);
}

// b. To the previous array, convert the first letter of each word to uppercase and show an alert for each modified 
// word.
for(var i=0; i<arrA.length;i++){
    var modifiedWord = arrA[i][0].toUpperCase() + arrA[i].substring(1);
    alert(modifiedWord);
}
// c. Create a variable called "sentence" that has an empty string, then iterate over the array from point a) using a 
// for loop to store each word inside the sentence variable. Finally, display a single alert with the complete string.
var sentence = '';
for(var i=0; i<arrA.length;i++){
    sentence = sentence + ' ' + arrA[i];
}
alert(sentence);
// I added a white space between each word

// d. Create an empty array and using a for loop with 10 iterations, fill the array with the number of the iteration.
// At the end of the for loop, the array should contain 10 elements, from number 0 to number 9. Show the final array in
// the browser console (use console.log).
var arrD = [];
for(var i=0; i<10;i++){
    arrD.push(i);
}
console.log(arrD);