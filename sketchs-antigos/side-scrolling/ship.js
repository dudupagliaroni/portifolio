function Ship(_grid) {
  this.screenPosition = createVector(width / 2, height / 2);
  this.gun = createVector();
  this.gridPosition = createVector();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
  this.atrito = 0.99;
  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;
  this.fuelRatio = 0.1;
  this.velMax = 5;
  this.fuel = 500;

  this.boost = function () {
    if (this.fuel > 0) {
      var force = p5.Vector.fromAngle(this.heading);
      this.vel.add(force.mult(0.1));
      this.vel.limit(this.velMax);

      // variavel que controla a perda de combustivel
      this.fuel -= this.fuelRatio;
    }
  };

  this.update = function () {
    if (this.isBoosting) {
      this.boost();
    }
    this.vel.mult(this.atrito);
  };

  this.show = function () {
    push();
    noStroke();
    fill(155, 155, 155);
    translate(this.screenPosition.x, this.screenPosition.y);
    rotate(this.heading);
    triangle(-this.r, this.r / 1.5, this.r, 0, -this.r, -this.r / 1.5);
    stroke(255);
    strokeWeight(4);
    point(this.gun.x, this.gun.y);
    pop();
  };

  this.setBoost = function (isBoosting) {
    this.isBoosting = isBoosting;
  };

  this.setRotaion = function (angle) {
    this.rotation = angle;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };

  this.updateGridPosition = function () {
    this.gridPosition.x += this.vel.x * -1;
    this.gridPosition.y += this.vel.y * -1;
    this.updateGunPosition();
  };

  this.updateGunPosition = function () {
    this.gun.x = this.r;
    this.gun.y = 0;
  };
}
