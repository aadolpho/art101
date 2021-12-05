/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 9 November
  * License: Public Domain
  */

//We will be experimenting with jQuery and adding buttons.

$("button.mybutton").click(function(){
  $("#target").removeClass("mysecondbutton");
  $("#target").removeClass("mythirdbutton");
  $("#target").toggleClass("mybutton");
})

/*$("button.my-secondbutton").click(function(){
  $("#target").removeClass("red");
  $("#target").removeClass("green");
  $("#target").toggleClass("blue");
})

$("button.my-thirdbutton").click(function(){
  $("#target").removeClass("red");
  $("#target").removeClass("blue");
  $("#target").toggleClass("green");
}) */
