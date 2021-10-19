/*
  * Author: Alexis Adolpho <aadolpho@ucsc.edu>
  * Created: 21 October
  * License: Public Domain
  */

//Define Array

myTransport = ["Honda Accord", "Rides from Friends", "Pet Dragon"];

//Define Object

myMainRide = {
  make : "Honda",
  model : "Accord",
  color: "Black",
  year : 2000
  age : function() {
    return 2021 - year;
  }
}

//Output

document.writeln("Getting around: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");
