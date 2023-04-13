function Obstacle(_grid, _x, _y) {
  this.width = 500;
  this.height = 500;
  this.grid = _grid;
  this.pos = createVector(_x, _y);
  this.heading = random(0, 359);
  this.r = random(50, 150);
  this.vel = createVector();
  this.orbitVelocity = random(0.01, 0.1)
  let force = p5.Vector.fromAngle(this.heading);
  force.setMag(random(10,25));
  this.vel.add(force.mult(0.1));

  this.update = function () {
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 + _y;
    _x += this.vel.x;
    _y += this.vel.y;
  };

  this.setRotaion = function (angle) {
    this.rotation = angle;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };

  this.show = function () {
    push();
    stroke(255);
    strokeWeight(50);
    fill(255);

    point(this.pos.x, this.pos.y);
    var dx = this.r * cos(this.heading);
    var dy = this.r * sin(this.heading);
    strokeWeight(10);

    point(this.pos.x + dx, this.pos.y + dy);

    pop();

    this.heading += this.orbitVelocity;
  };

  this.text = function () {
    textSize(10);
    textFont("Helvetica");
    text("x: " + _x, this.pos.x - 5, this.pos.y);
    text("y: " + _y * -1, this.pos.x - 5, this.pos.y + 10);
  };
}
