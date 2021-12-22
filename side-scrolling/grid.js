function Grid(_width, _height) {
  this.width = _width;
  this.height = _height;

  this.pos = createVector(
    width / 2 - this.width / 2,
    height / 2 - this.height / 2
  );

  this.drawLines = function () {
    let scl = 50;
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
  };
}
