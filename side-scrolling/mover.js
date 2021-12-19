function Mover() {
  this.width = 50;
  this.height = 100;

  this.pos = createVector(width / 2, height / 2);
  this.relPos = createVector();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.r = 15;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;

  this.boost = function () {
    var force = p5.Vector.fromAngle(this.heading);
    this.vel.add(force.mult(0.1));
    this.vel.limit(10);
  };

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.vel.mult(0.991);
  };

  this.show = function () {
    push();
    fill(255, 0, 255);
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    triangle(-this.r + 5, this.r, this.r - 5, this.r, 0, -this.r);
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
    this.relPos.x = grid.pos.x + grid.width / 2 - width / 2;
    this.relPos.y = grid.pos.y + grid.height / 2 - height / 2;
  };
}
