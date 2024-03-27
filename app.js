var characters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
var text = "lemurph";
let lemurphHovered = false;

$(document).ready(function(){

  $("#lemurph").on(
    "mouseenter", 
    (function() {
      lemurphHovered = true;
      $("#lemurph").text(text);
    })
  ); 

  $("#lemurph").on(
    "mouseleave", 
    (function() {
        lemurphHovered = false;
    })
  ); 

}); 

setInterval(function() { // this code is executed every 500 milliseconds:
  if (!lemurphHovered) {
      randomText = "";
  for (let i=text.length; i > 0; i--) {
    randomText += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  $("#lemurph").text(randomText);
  }
}, 100);



