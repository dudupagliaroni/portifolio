function Obstacle() {
  this.width = 100;
  this.height = 60;
  this.pos = createVector(500, 400 - this.height);

  this.show = function (grid, _x, _y) {
    fill(0, 0, 255);
    rect(
      grid.pos.x + _x,
      grid.pos.y+ _y,
      this.width,
      this.height
    );
  };
}
