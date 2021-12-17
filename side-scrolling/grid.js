function Grid() {
  this.width = 1000;
  this.height = 480;
  this.pos = createVector(width / 2, height / 2);

  this.drawLines = function () {
    this.x_rel = this.pos.x - this.width/2;
    let scl = 20;
    stroke(51);
    for (var i = 0; i < this.width / scl + 1; i++) {
      line(this.x_rel, scl * i, this.x_rel + this.width, scl * i);
      line(
        this.x_rel + scl * i,
        0,
        this.x_rel + scl * i,
        this.pos.y + this.height
      );
    }
  };
}
