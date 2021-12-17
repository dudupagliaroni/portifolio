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
  //translate(mover.pos.x, mover.pos.y);
  mover.show();
  obstacle.show(grid, 400);
  //grid.pos.x -=0.9;
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW){
    grid.pos.x -=10;
  }
}
