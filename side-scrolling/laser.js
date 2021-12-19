function Laser(grid, shipPos, heading) {
  this.pos = createVector();
  this.vel = p5.Vector.fromAngle(heading);
  this.vel.setMag(10);

  this.update = function () {
    (this.pos.x = grid.pos.x + grid.width / 2)+shipPos.x;
    (this.pos.y = grid.pos.y + grid.height / 2)+shipPos.y;
    //this.pos.add(this.vel);
  };

  this.show = function () {
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
