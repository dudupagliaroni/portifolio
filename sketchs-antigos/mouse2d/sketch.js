function setup() {
  createCanvas(100, 100);

  describe('Three arrows extend from the center of a gray square with a vertical line down its middle. A black arrow points to the right, a blue arrow points to the bottom left, and a red arrow points to the bottom right.');
}
function draw() {
  background(200);

  // Draw a vertical line.
  line(50, 0, 50, 100);

  // Create a normal vector.
  let n = createVector(1, 0);

  // Center.
  let v0 = createVector(50, 50);

  // Create a vector to reflect.
  let v1 = createVector(30, 40);

  // Create a reflected vector.
  let v2 = p5.Vector.reflect(v1, n);

  // Scale the normal vector for drawing.
  n.setMag(30);

  // Draw the black arrow.
  drawArrow(v0, n, 'black');

  // Draw the red arrow.
  drawArrow(v0, v1, 'red');

  // Draw the blue arrow.
  drawArrow(v0, v2, 'blue');
}

// Draws an arrow between two vectors.
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
pop();
}