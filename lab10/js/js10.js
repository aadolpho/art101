/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 4 November
  * License: Public Domain
  */

  //Creating a function where user inputs their name & sorts the letters
//alphabetically

document.getElementById("my-button").addEventListener("click", display)

function sortName() {
  var userName = window.prompt("Hello! Let's sort your name. What is your name?");
  console.log("userName =", userName);

  var nameArray = userName.split('');
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);

  return nameSorted;
}

//Output

document.writeln("We are finished! Here is your new name: ",
    sortName(), "</br>");
