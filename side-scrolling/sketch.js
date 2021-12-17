let mover;
let obstacle;
let grid;
let grid_x_rel;

function setup() {
  createCanvas(640, 480);

  pos_relative = createVector();
  mover = new Mover();
  obstacle = new Obstacle();
  grid = new Grid();
}

function draw() {
  background(220);
  grid.drawLines();
  grid.pos.sub(mover.vel);
  mover.turn();
  mover.update();
  mover.show();
  obstacle.show(grid, 400, 400);
  console.log(grid.pos);
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
