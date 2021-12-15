function Laser(shipPos, heading) {
  this.pos = createVector(shipPos.x, shipPos.y);
  this.vel = p5.Vector.fromAngle(heading);
  this.vel.setMag(10);

  this.update = function () {
    this.pos.add(this.vel);
  };

  this.render = function () {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  };
}
