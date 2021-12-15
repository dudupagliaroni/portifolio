var ship;
function setup() {
  createCanvas(400, 400);
  ship = new Ship();
}

function draw() {
  background(0);
  ship.render();
}

function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.r = 15;
  this.heading = 90;


  this.render = function () {
    
    noFill();
    stroke(255);
    translate(this.pos.x, this.pos.y);
    rotate(this.heading)
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    //this.heading++;
  };
}
