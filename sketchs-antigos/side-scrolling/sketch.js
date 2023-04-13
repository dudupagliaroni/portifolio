let mover;
let obstacle;
let grid;
let polyShape;

let asteroids = [];
let lasers = [];

function setup() {
  const CANVAS = createCanvas(800, 800);
  CANVAS.parent("canvas");

  colorPicker = createColorPicker("#ed225d");
  colorPicker.parent("colorPicker");

  sliderAtrito = createInput(" ");
  sliderAtrito.parent("slideAtrito");

  grid = new Grid(10000, 10000);
  mover = new Mover();
  polyShape = new PolyShape(grid);
  generateAsteroids(150);
  centerGrid = new Obstacle(grid, 0, 0);
}

function draw() {
  background(0);

  grid.drawLines();
  grid.pos.sub(mover.vel);
  centerGrid.update();
  centerGrid.show();

  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    asteroids[i].show();
  }

  for (var i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();
  }

  showCoordenates();

  shipUpdate();

  deleteLaser();
}

function shipUpdate() {
  mover.turn();
  mover.update(0.99999);
  mover.updatePositionToGrid();
  mover.show(colorPicker.color());
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    mover.setRotaion(0.1);
  } else if (keyCode == LEFT_ARROW) {
    mover.setRotaion(-0.1);
  } else if (keyCode == UP_ARROW) {
    mover.boosting(true);
  } else if ((keyCode = 229)) {
    console.log("SPACE");
    lasers.push(new Laser(grid, mover));
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    mover.setRotaion(0);
  }
  if (keyCode == UP_ARROW) {
    mover.boosting(false);
  }
}

function showCoordenates() {
  stroke(0);
  fill(255);
  textSize(15);
  textFont("Helvetica");
  text("ship.pos.x: " + Math.round(mover.relPos.x), 30, 30);
  text("ship.pos.y: " + Math.round(mover.relPos.y), 30, 50);
  text("ship.fuel: " + Math.round(mover.fuel), 30, 70);
  text("lasers: " + lasers.length, 30, 90);
}

function generateAsteroids(num) {
  for (let i = 0; i < num; i++) {
    asteroids[i] = new Obstacle(
      grid,
      floor(random(-grid.width / 2, grid.width / 2)),
      floor(random(-grid.height / 2, grid.height / 2))
    );
  }
}

function deleteLaser() {
  for (i = 0; i < lasers.length; i++) {
    if (lasers[i].posInicial.dist(lasers[i].posInGrid) > 1000) {
      index = lasers.indexOf(i);
      lasers.splice(index, 1);
    }
  }
}
