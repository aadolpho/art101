/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 30 November
  * License: Public Domain
  */

//We will be experimenting with jQuery and AJAX.

var myAPI = "https://xkcd.com/info.0.json";
$("#activate").click(bigDumb);

function putTextOnPage(text){
  $("#output").html(text);
}

function bigDumb() {
  console.log("So far, good! My API is doing its own thing.");
  $.ajax({
    // The URL for the request
    url: myAPI,
    // The data to send (will be converted to a query string)
    data: { },
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // If the request succeeds
    success: function( data ) {
      // turn data object into string just so we can display it
      // and look at it and understand WTF is going on.
      var textData = JSON.stringify(data);
      // let's build up a string to display on our page
      var str = "";
      // let's get the individual values from data object
      var imageURL = data.img;
      var title = data.title;
      var alt = data.alt;
      // building our string for display using HTML
      str += "<h2>" + title + "</h1>";
      str += "<img src='" + imageURL + "' title='" + alt + "'>"
      // put our html string on our page using our helper function
      putTextOnPage(str);
      // on the console, we can see whaz up
      console.log("Success:", textData);
    }
  })
  // If the request fails
  .fail(function( xhr, status, errorThrown ) {
    console.log("Failure.");
    putTextOnPage(errorThrown + " Status:" + status);
    //console.log(errorThrown + " Status:" + status );
  })
  console.log("It works!");

}
