// Freely made for your content! By Roky Henderson.
var pfps = Array("1", "2", "3", "4", "5");                      // Makes an array of all the pfps
var pfpofchoice = pfps[Math.floor(Math.random()*pfps.length)];  // Choses an array randomly
console.log(pfpofchoice);                                       // Prints the number to the console (for debugging purposes)
window.location.href=("media/" + pfpofchoice + ".png");         // Goes to the location of the random image