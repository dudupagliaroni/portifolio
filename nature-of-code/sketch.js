let mover;

function setup() {
  createCanvas(800, 800);
  mover = new Mover();
}

function draw() {
  background(111, 71, 157, 255);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  let wind = createVector(0.1, 0);
  mover.applyForce(wind);

  mover.update();
  mover.edges();
  mover.display();
}

function mouseReleased() {
  return true;
}
