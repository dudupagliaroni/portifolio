function Obstacle() {
  this.width = 100;
  this.height = 50;
  this.pos = createVector(500, 400 - this.height);

  this.show = function (grid, _x) {
    fill(0, 0, 255);
    rect(
      grid.pos.x + _x,
      this.pos.y,
      this.width,
      this.height
    );
  };
}
