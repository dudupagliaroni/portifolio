let walker;

function setup() {

  createCanvas(windowWidth, windowHeight);
  walker = new Mover(width, 0);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
}
