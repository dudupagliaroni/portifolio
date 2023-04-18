function Mover() {

  this.pos = createVector(width / 2, height / 2);
  this.gun = createVector();
  this.relPos = createVector();
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);

  this.r = 20;
  this.heading = 0;
  this.rotation = 0;
  this.isBoosting = false;
  this.fuelRatio = 1;
  this.velMax = 5;
  this.fuel = 150;

  this.boost = function () {

    if (this.fuel > 0){
      var force = p5.Vector.fromAngle(this.heading);
      this.vel.add(force.mult(0.1));
      this.vel.limit(this.velMax);

      // variavel que controla a perda de combustivel
      this.fuel-=this.fuelRatio;
    }
  };

  this.updateEngine = function(){
    this.velMax = 10;
    this.fuelRatio = 5;
  }

  this.update = function (atrito) {
    if (this.isBoosting) {
      this.boost();
    }
    this.vel.mult(atrito);
  };

  this.show = function (color) {
    push();
    noStroke();
    fill(color);
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    triangle(-this.r, this.r / 1.5, this.r, 0, -this.r, -this.r / 1.5);
    stroke(255);
    strokeWeight(4)
    point(this.gun.x, this.gun.y);
    pop();
  };

  this.boosting = function (isBoosting) {
    this.isBoosting = isBoosting;
  };

  this.setRotaion = function (angle) {
    this.rotation = angle;
  };

  this.turn = function () {
    this.heading += this.rotation;
  };

  this.updatePositionToGrid = function () {
    this.relPos.x = (grid.pos.x + grid.width / 2 - width / 2) * -1;
    this.relPos.y = grid.pos.y + grid.height / 2 - height / 2;
    this.updateGunPosition();
  };

  this.updateGunPosition = function () {
    this.gun.x = this.r;
    this.gun.y = 0;
  };
}
