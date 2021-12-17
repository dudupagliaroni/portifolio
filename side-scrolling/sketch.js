let mover;
let obstacle;
let grid;
var asteroids = [];


function setup() {
  createCanvas(800, 800);
  mover = new Mover();
  obstacle = new Obstacle();
  grid = new Grid();
  // for (var i = 0; i < 7; i++) {
  //   asteroids.push(new Asteroid(grid,400,400));
  // }
}

function draw() {
  background(0);
  grid.drawLines();
  grid.pos.sub(mover.vel);
  mover.turn();
  mover.update();
  mover.show();
  obstacle.show(grid, 2500, 400);
  // for (var i = 0; i < this.asteroids.length; i++) {
  //   this.asteroids[i].render();
  //   this.asteroids[i].update();
  // }
  console.log(grid.pos)
}

function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    mover.setRotaion(0.1);
  } else if (keyCode == LEFT_ARROW) {
    mover.setRotaion(-0.1);
  } else if (keyCode == UP_ARROW) {
    mover.boosting(true);
  } else if ((keyCode = 229)) {
    //lasers.push(new Laser(ship.pos, ship.heading));
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
