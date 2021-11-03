/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 2 November
  * License: Public Domain
  */

 window.onload = function () {

     // your script here

    // Use getElementById() to find your output <div> and assign it to a variable outputEl (step 1)
    var outputEl = document.getElementById("output");
    console.log("outputEl: ", outputEl);

    // Create a new element with document.createElement("p") and assign it to a variable new1El (step 2)
    var new1El = document.createElement("p");

    // Change the html attribute of new1El to say "something new.""
    new1El.innerHTML = "Big Dumb.";
    new1El.id = "new-one";

    // Create a new element with document.createElement("p") and assign it to a variable new1El
    var new2El = document.createElement("p");
    new1El.id = "new-two";

    // Change the html attribute of new1El to say "something else.""
    new2El.innerHTML = "Bigger Dumb.";

    // Append both new elements one at a time using appendChild() (step 3)
    outputEl.appendChild(new1El);
    outputEl.appendChild(new2El);

    new1El.style.color = "green";
    new2El.style.color = "green";
    outputEl.style.border = "solid 3px black";

 }
