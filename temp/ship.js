function Ship() {
  this.pos = createVector(width / 2, height / 2);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.r = 10;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.pos.add(this.vel);
    this.vel.mult(0.99);
  };

  this.edges = function () {
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    }
    if (this.pos.y < -this.r) {
      this.pos.y = height - this.r;
    }
  };

  this.boosting = function (b) {
    this.isBoosting = b;
  };

  this.boost = function () {
    var force = p5.Vector.fromAngle(this.heading);
    //this.acc.x = sin(this.heading);
    //this.acc.y = cos(this.heading);

    this.vel.add(force.mult(0.1));
    this.vel.limit(5);
  };

  this.render = function () {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading + PI / 2);
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
    pop();
  };

  this.setRotaion = function (a) {
    this.rotation = a;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };
}
