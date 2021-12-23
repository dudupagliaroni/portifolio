function Mover() {
  this.width = 50;
  this.height = 100;

  this.pos = createVector(width / 2, height / 2);
  this.relPos = createVector();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;

  this.boost = function () {
    var force = p5.Vector.fromAngle(this.heading);
    this.vel.add(force.mult(0.1));
    this.vel.limit(5);
  };

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.vel.mult(0.99);
  };

  this.show = function () {
    push();
    noStroke();
    fill(255, 0, 100);
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    triangle(-this.r, this.r, this.r, 0, -this.r, -this.r);
    rotate(this.heading + PI / 2);
    pop();
  };

  this.boosting = function (b) {
    this.isBoosting = b;
  };

  this.setRotaion = function (a) {
    this.rotation = a;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };

  this.updatePositionToGrid = function () {
    this.relPos.x = (grid.pos.x + grid.width / 2 - width / 2) * -1;
    this.relPos.y = grid.pos.y + grid.height / 2 - height / 2;
  };
}
