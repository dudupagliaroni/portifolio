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

  this.hits = function (asteroid) {
    var d = dist(this.pos.x, this.pos.y, asteroid.pos.x, asteroid.pos.y);
    if (d < asteroid.r) {
      console.log("HIT");
    }
  };
}
