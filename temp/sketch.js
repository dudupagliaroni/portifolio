var ship;
var asteroids = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  ship = new Ship();
  for (var i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}

function draw() {
  background(0);

  ship.turn();
  ship.render();
  ship.update();
  ship.edges();

  for (var i = 0; i < this.asteroids.length; i++) {
    this.asteroids[i].render();
    this.asteroids[i].update();
    this.asteroids[i].edges();
  }
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
  }
}
