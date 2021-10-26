/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 26 October
  * License: Public Domain
  */

//Creating a function where user inputs their name & sorts the letters
//alphabetically

function sortName() {
  var userName = window.prompt("Hello! Let's sort your name. What is your name?");
  console.log("userName =", userName);

  var nameArray = userName.split('');             //We're going to split the name first into individual letters
  console.log("nameArray =", nameArray);

  var nameArraySort = nameArray.sort();           //After splitting the name, we will sort the letters alphabetically
  console.log("nameArraySort =", nameArraySort);

  var nameSorted = nameArraySort.join('');        //Once we are finished sorting, we will join the letters together
  console.log("nameSorted =", nameSorted);

  return nameSorted;                              //Once, we are finished, we will return the new, sorted name
}

//Output

document.writeln("We are finished! Here is your new name: ",
    sortName(), "</br>");
