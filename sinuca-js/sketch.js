let bola;

function setup() {
  createCanvas(400, 800);
  bola = new Bola(200, 200, 25);
  //background(39,107,64);
}

function draw() {
  background(39,107,64);
  bola.update();
  bola.bounce();
  bola.show();
  bola.drawLine();
}