let movers = [];

let liquid;

let canvasDiv;
let divWidth;

function setup() {
  canvasDiv = document.getElementById("sketch-1");
  divWidth = canvasDiv.offsetWidth;
  let divHeight = canvasDiv.offsetHeight;
  let canvas = createCanvas(divWidth+20, divHeight);
  canvas.parent("sketch-1");
  background(84, 37, 129);
  reset();
  liquid = new Liquid(0, height / 2, width, height / 2, 0.1);
}

function draw() {
  background(155);

  liquid.display();

  for (let i = 0; i < movers.length; i++) {
    if (liquid.contains(movers[i])) {
      let dragForce = liquid.calculateDrag(movers[i]);

      movers[i].applyForce(dragForce);
    }

    let gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);

    movers[i].update();
    movers[i].display();
    movers[i].checkEdges();
  }
}

function mousePressed() {
  reset();
}

function reset() {
  let num = canvasDiv.offsetWidth;
  console.log(num);
  for (let i = 0; i < num / 3 - 10; i++) {
    movers[i] = new Mover(random(1, 5), 40 + i * 80, 0);
  }
}

let Liquid = function (x, y, w, h, c) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.c = c;
};

Liquid.prototype.contains = function (m) {
  let l = m.position;
  return (
    l.x > this.x &&
    l.x < this.x + this.w &&
    l.y > this.y &&
    l.y < this.y + this.h
  );
};

Liquid.prototype.calculateDrag = function (m) {
  let speed = m.velocity.mag();
  let dragMagnitude = this.c * speed * speed;

  let dragForce = m.velocity.copy();
  dragForce.mult(-1);

  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};

Liquid.prototype.display = function () {
  stroke(0);
  fill(50, 37, 129);
  rect(this.x, this.y, this.w, this.h);
  line(0, this.y, width, this.y);
};

function Mover(m, x, y) {
  this.mass = m;
  this.position = createVector(x, y);
  this.velocity = createVector(0, 0);
  this.acceleration = createVector(0, 0);
}

Mover.prototype.applyForce = function (force) {
  let f = p5.Vector.div(force, this.mass);
  this.acceleration.add(f);
};

Mover.prototype.update = function () {
  this.velocity.add(this.acceleration);

  this.position.add(this.velocity);

  this.acceleration.mult(0);
};

Mover.prototype.display = function () {
  stroke(0);
  strokeWeight(2);
  fill(252, 163, 17);
  ellipse(this.position.x, this.position.y, this.mass * 16, this.mass * 16);
};

Mover.prototype.checkEdges = function () {
  if (this.position.y > height - this.mass * 8) {
    this.velocity.y *= -0.9;
    this.position.y = height - this.mass * 8;
  }
};
