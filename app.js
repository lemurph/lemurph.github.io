const characters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
const bits = "01"
const logo_text = "lemurph";
let lemurphHovered = false;
let particles = [];

const canvas = document.getElementById("mainCanvas");
canvas.width  = window.innerWidth;
canvas.height = window.innerHeight;
const canvasContext = canvas.getContext("2d");
canvasContext.font = "21px DOS";


$(document).ready(function(){

  $("#lemurph").on(
    "mouseenter", 
    (function() {
      lemurphHovered = true;
      $("#lemurph").text(logo_text);
    })
  ); 

  $("#lemurph").on(
    "mouseleave", 
    (function() {
        lemurphHovered = false;
    })
  ); 

}); 

document.addEventListener("mousemove", function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
  particleText = bits.charAt(Math.floor(Math.random() * bits.length));
  var particle = new Particle(mouseX, mouseY, particleText);
  particle.draw();
  particles.push(particle);
});

class Particle {
  constructor(posX, posY, text) {
    this.posX = posX;
    this.posY = posY
    this.text = text
  }
  
  draw() {
    canvasContext.fillStyle = "white";
    canvasContext.fillText(this.text, this.posX, this.posY);
  }
  
  removeParticle() {
    console.log("I am being deleted:" + this.text + "at pos " + this.posX + " " + this.posY)
    canvasContext.fillStyle = "black";
    canvasContext.fillRect(this.posX-15, this.posY-15, 30, 30);
    particles.splice(particles.indexOf(this), 1);
  }


}

setInterval(function() {
  if (particles.length > 0){
    particles[0].removeParticle();
  }
}, 9);

setInterval(function() {
  if (!lemurphHovered) {
    randomlogo_text = "";
  for (let i=logo_text.length; i > 0; i--) {
    randomlogo_text += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  $("#lemurph").text(randomlogo_text);
  }
}, 100);



