function Grid() {
  this.width = 1000;
  this.height = 1000;
  this.pos = createVector(width/2, height/2);
  this.pos.x = this.pos.x - width / 2;
  this.pos.y = this.pos.y - height / 2;

  this.drawLines = function () {
    this.x_rel = this.pos.x;
    this.y_rel = this.pos.y;
    let scl = 20;
    stroke(51);
    for (var i = 0; i < this.width / scl + 1; i++) {
      line(
        this.x_rel,
        this.y_rel + scl * i,
        this.x_rel + this.width,
        this.y_rel + scl * i
      );
      line(
        this.x_rel + scl * i,
        this.y_rel,
        this.x_rel + scl * i,
        this.y_rel + this.height
      );
    }
  };
}
