let mover;
let obstacle;
let grid;
let polyShape;

var asteroids = [];
let lasers = [];

function setup() {
  createCanvas(1024, 720);
  grid = new Grid(1000, 1000);
  mover = new Mover();
  polyShape = new PolyShape(grid);
  generateAsteroids(5);

  centerGrid = new Obstacle(grid, 0, 0);
}

function draw() {
  background(0);

  grid.drawLines();
  grid.pos.sub(mover.vel);
  //centerGrid.update();
  // centerGrid.show();

  mover.turn();
  mover.update();
  mover.updatePositionToGrid();
  mover.show();

  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    asteroids[i].show();
  }

   for (var i = 0; i < lasers.length; i++) {
    lasers[i].update();
     lasers[i].show();
     
   }


  polyShape.update();
  polyShape.show();

  showCoordenates();
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    mover.setRotaion(0.1);
  } else if (keyCode == LEFT_ARROW) {
    mover.setRotaion(-0.1);
  } else if (keyCode == UP_ARROW) {
    mover.boosting(true);
  } else if ((keyCode = 229)) {
    lasers.push(new Laser(grid, mover.relPos, mover.heading));
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
  textSize(14);
  textFont("Helvetica");
  text("x: " + Math.round(mover.relPos.x), 30, 30);
  text("y: " + Math.round(mover.relPos.y), 30, 60);
  text("x_rel: " + Math.round(mover.pos.x), 30, 90);
  text("y_rel: " + Math.round(mover.pos.y), 30, 120);
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
