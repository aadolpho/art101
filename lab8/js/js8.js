/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 28 October
  * License: Public Domain
  */

//Creating an odd function

function isOdd(x) {
  return(x % 2 == 1);
}

//Testing our odd function

console.log("Is 100 odd?", isOdd(100));
console.log("Is 101 odd?", isOdd(101));

//My array

array = [2, 50, 3, 72, 36, 20]
console.log("This is my array: ", array);

//Mapping my array

var numResult = array.map(isOdd);

//This will return our values either True or False

console.log("Let's test the array to see if it is odd or not.", numResult);

//Let's try adding some values to our array through mapping.

var numResult = array.map(function(x){
  return x + 20;
})

console.log("Adding 20 to the array: ", numResult);

var outputEl = document.getElementById("output");
outputEl.innerHTML = numResult; 
