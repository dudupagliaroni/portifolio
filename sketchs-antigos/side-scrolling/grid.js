function Grid(size) {
  this.size = size;
  this.width = size;
  this.height = size;
  this.pos = createVector();
  this.center = createVector(size / 2, size / 2);

  this.updatePosition = function (ship) {
    this.pos.set(ship.gridPosition);
    this.updateCenter();
  };

  this.updateCenter = function () {
    this.center.x = this.pos.x + this.width / 2
    this.center.y = this.pos.y + this.height / 2
  };

  this.drawLines = function () {
    let scl = 50;
    push();
    stroke(255, 100);
    for (var i = 0; i < this.width / scl + 1; i++) {
      line(
        this.pos.x,
        this.pos.y + scl * i,
        this.pos.x + this.width,
        this.pos.y + scl * i
      );
      line(
        this.pos.x + scl * i,
        this.pos.y,
        this.pos.x + scl * i,
        this.pos.y + this.height
      );
    }
    pop();
    push();
    stroke("red");
    strokeWeight(10);
    point(this.center.x, this.center.y);
    pop();
  };
}
