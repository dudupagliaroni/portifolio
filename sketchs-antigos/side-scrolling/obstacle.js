function Obstacle(_grid, _x, _y) {
  this.width = 500;
  this.height = 500;
  this.grid = _grid;
  this.pos = createVector(_x, _y);
  this.heading = random(0, 359);
  this.r = map(noise(random(1, 20)), 0, 1, 10, 200);
  let rs = [];
  this.size = 10;
  this.moonSize = 5;
  this.vel = createVector();
  this.rotationSpeed = random(-0.05, 0.05);
  let force = p5.Vector.fromAngle(this.heading);
  force.setMag(random(1, 5));
  this.vel.add(force.mult(0.3));

  for (let a = 0; a < 13; a++) {
    rs.push(floor(map(noise(random(1, 20)), 0, 1, 150, 200)))
  }

  console.log(rs)

  this.update = function () {
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 + _y;
    _x += this.vel.x;
    _y += this.vel.y;
  };

  this.show = function () {
    push();
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y)
    noFill();
    beginShape();
    for (let i = 0; i < rs.length; i+=(TWO_PI/rs.length)) {
      var dx = 100 * cos(this.heading + i);
      var dy = 100 * sin(this.heading + i);

      vertex(this.pos.x + dx, this.pos.y + dy);
      point(this.pos.x + dx, this.pos.y + dy);
    }
    endShape();

    pop();

    this.heading += this.rotationSpeed;
  };

  this.text = function () {
    textSize(10);
    textFont("Helvetica");
    text("x: " + _x, this.pos.x - 5, this.pos.y);
    text("y: " + _y * -1, this.pos.x - 5, this.pos.y + 10);
  };
}
