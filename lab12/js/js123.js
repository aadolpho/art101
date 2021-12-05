/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 16 November
  * License: Public Domain
  */

//Depending on the length of mod 4, we will be returning either Gryffindor, Ravenclaw, Slytherin, or Hufflepuff

function deadlyItems(str) {
  word = str;
  if ((word == "oil") || (word == "Oil")) {
    return "You have chosen oil. This is what happens to the fishes.."
  }
  else if ((word == "trash") || (word == "Trash")) {
    return "You have chosen trash. This is what happens to the fishes.."
  }
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function() {
  var name = document.getElementById("input").value;
  var house = sortingHat(name);
  newText = "<p>The Sorting Hat has sorted you into " + house + "</p>";
  document.getElementById("output").innerHTML = newText;
})
