/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 9 November
  * License: Public Domain
  */

//We will be experimenting with jQuery and adding buttons.

$("#mybutton").click(function(){
  $("#first").toggleClass("red");
})

$("#mysecondbutton").click(function(){
  $("#second").toggleClass("blue");
})

$("#mythirdbutton").click(function(){
  $("#third").toggleClass("green");
})
