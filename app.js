var characters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
var logo_text = "lemurph";
let lemurphHovered = false;
let particles = [];

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
  $("#cursor").css({
    left: mouseX,
    top: mouseY
  })
  $("#cursor").text(characters.charAt(Math.floor(Math.random() * characters.length)));
  for (let i=0; i<5; i++) {
    new Particle(createVector(mouseX, mouseY));
  }
});

class Particle {
  constructor(pos) {
    this.pos = pos;
    this.sat = 100;
    this.val = 100;
    this.lifetime = 100;
    this.age = 0;
    particles.push(this);
  }
  
  update() {
    if (this.age >= this.lifetime) {this.remove()}
    this.age += 1;
    if (this.age % 10 == 0) {
      this.vel.rotate(random([-angle, angle]));
    }
    this.pos.add(this.vel);
  }
  
  draw() {
    push()
    stroke(this.hue, this.sat, this.val, 1-this.age/this.lifetime);
    translate(this.pos.x, this.pos.y);
    line(0, 0, -this.vel.x, -this.vel.y);
    pop()
  }
  
  remove() {
    particles.splice(particles.indexOf(this), 1);
  }
}

setInterval(function() {
  if (!lemurphHovered) {
      randomlogo_text = "";
  for (let i=logo_text.length; i > 0; i--) {
    randomlogo_text += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  $("#lemurph").text(randomlogo_text);
  }
}, 100);



