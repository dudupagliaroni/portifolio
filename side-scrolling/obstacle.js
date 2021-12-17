function Obstacle() {
  this.width = 60;
  this.height = 60;
  this.pos = createVector(500, 400 - this.height);

  this.show = function (grid, _x, _y) {
    fill(0, 0, 255);
    rect(
      grid.pos.x + grid.width / 2 + _x,
      grid.pos.y + grid.height / 2 + _y,
      this.width,
      this.height
    );
  };
}
