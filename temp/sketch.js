var ship;
var asteroids = [];
lasers = [];

function setup() {
  createCanvas(800, 800);
  ship = new Ship();
  for (var i = 0; i < 7; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);
  drawScore();

  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].render();
    this.asteroids[i].update();
    this.asteroids[i].edges();
  }

  for (var i = 0; i < this.lasers.length; i++) {
    this.lasers[i].render();
    this.lasers[i].update();
  }

  ship.turn();
  ship.render();
  ship.update();
  ship.edges();
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    ship.setRotaion(0);
  }
  if (keyCode == UP_ARROW) {
    ship.boosting(false);
  }
}
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotaion(0.1);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotaion(-0.1);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  } else if ((keyCode = 229)) {
    lasers.push(new Laser(ship.pos, ship.heading));
  }
}

function drawScore() {
  textSize(12);
  fill(255);
  text("SCORE: " + this.lasers.length, 10, 30);
  text("HI-SCORE: " + 10000 + this.lasers.length, width - 120, 30);
}
