function Grid() {
  this.width = 500;
  this.height = 500;
  this.pos = createVector(width/2, height/2);
  this.pos.x = this.pos.x - this.width / 2 + 100;
  this.pos.y = this.pos.y - this.height / 2 + 100;

  this.drawLines = function () {
    this.x_rel = this.pos.x;
    this.y_rel = this.pos.y;
    let scl = 50;
    stroke(255,100);
    for (var i = 0; i < this.width / scl - 1; i++) {
      line(
        this.x_rel - scl * 2,
        this.y_rel + scl * i,
        this.x_rel + this.width - scl * 2,
        this.y_rel + scl * i
      );
      line(
        this.x_rel + scl * i,
        this.y_rel - scl * 2,
        this.x_rel + scl * i,
        this.y_rel + this.height - scl * 2
      );
    }
  };
}
