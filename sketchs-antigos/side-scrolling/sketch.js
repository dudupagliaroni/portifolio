let ship;
let obstacle;
let grid;
let polyShape;

let asteroids = [];
let numAsteroids = 5;
let lasers = [];

function setup() {
  const CANVAS = createCanvas(800, 800);
  CANVAS.parent("canvas");

  colorPicker = createColorPicker("#ed225d");
  colorPicker.parent("colorPicker");

  sliderAtrito = createInput(" ");
  sliderAtrito.parent("slideAtrito");

  grid = new Grid(1000, 1000);
  ship = new Ship(grid);
  polyShape = new PolyShape(grid);
  generateAsteroids(numAsteroids);
}

function draw() {
  background(0);
  updateAllobjects();
  showCoordenates();
}

function updateAllobjects() {
  updateGrid();
  checkCollisions();
  updateShip();
  updateAsteroids();
  updateLasers();
}

function updateGrid() {
  grid.drawLines();
  grid.updatePosition(ship);
}

function updateShip() {
  ship.turn();
  ship.update();
  ship.updatePositionToGrid();
  ship.show(colorPicker.color());
}

function updateLasers() {
  deleteLaser();
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();
  }
}

function updateAsteroids() {
  deleteAsteroid();
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    asteroids[i].show();
    asteroids[i].text();
  }
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotaion(0.03);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotaion(-0.03);
  } else if (keyCode == UP_ARROW) {
    ship.boosting(true);
  } else if (keyCode == 32) {
    lasers.unshift(new Laser(grid, ship));
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

function generateAsteroids(num) {
  for (let i = 0; i < num; i++) {
    asteroids[i] = new Asteroid(
      grid,
      floor(random(-grid.width / 2, grid.width / 2)),
      floor(random(-grid.height / 2, grid.height / 2))
    );
  }
}

function deleteLaser() {
  for (i = 0; i < lasers.length; i++) {
    if (lasers[i].laserLife < 1 || lasers[i].isHit) {
      lasers.pop();
    }
  }
}

function deleteAsteroid() {
  for (i = 0; i < asteroids.length; i++) {
    if (asteroids[i].isHit) {
      asteroids.splice(i, 1);
    }
  }
}

function checkLinePolyCollision(line, poly) {
  return collidePointPoly(line.position.x, line.position.y, poly);
}

function checkCollisions() {
  for (var i = 0; i < lasers.length; i++) {
    for (var j = 0; j < asteroids.length; j++) {
      if (checkLinePolyCollision(lasers[i], asteroids[j].createVertices())) {
        console.log("Acertou", asteroids[j].name);
        asteroids[j].isHit = true;
        lasers[i].isHit = true;
      }
    }
  }
}

function showCoordenates() {
  stroke(0);
  fill(255);
  textSize(15);
  textFont("Helvetica");
  text("ship.pos.x: " + Math.round(ship.relPos.x), 30, 30);
  text("ship.pos.y: " + Math.round(ship.relPos.y), 30, 50);
  text("ship.fuel: " + Math.round(ship.fuel), 30, 70);
  text("lasers: " + lasers.length, 30, 90);
  text("Asteroids: " + asteroids.length, 30, 110);
  // text(
  //   "vs: " + Math.abs(Math.round(ship.vel.y * 100) / 100).toFixed(2),
  //   30,
  //   110
  // );
  // text(
  //   "hs: " + Math.abs(Math.round(ship.vel.x * 100) / 100).toFixed(2),
  //   30,
  //   130
  // );
}
