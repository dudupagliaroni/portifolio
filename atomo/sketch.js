let walker;

function setup() {

  createCanvas(windowWidth, windowHeight);
  walker = new Mover(width/2, height-height);
  background(0);
}

function draw() {
  //background(0,1);
  walker.update();
  walker.show();
}
5