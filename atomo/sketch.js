let walker;

function setup() {

  createCanvas(windowWidth, windowHeight);
  walker = new Mover(width/2, height-height);
  background(0);
}

function draw() {
  walker.update();
  walker.show();
}
