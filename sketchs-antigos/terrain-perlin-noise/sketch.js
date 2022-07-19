var cols, rows;
var scl = 20;
var terrain = [];

function setup() {
  frameRate(2);
  createCanvas(800, 800, WEBGL);
  background(51);
  scl = 20;
  cols = width / scl;
  rows = height / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 1 //specify a default value for now
    }
  }
  console.log(terrain)
}

function draw() {
  console.log(terrain[0][0])
  background(51);
  noFill();
  stroke(0, 255, 0);

  //translate(width / 2, height / 2);
  rotateX(PI / 3);

  translate(-width / 2, -height / 2);
  for (var y = 0; y < rows; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols + 1; x++) {
      vertex(x * scl, y * scl, random(1)*x+(noise(10))*10);
      vertex(x * scl, (y + 1) * scl, random(1)*y+(noise(10)*10));
    }
    endShape();
  }
}
