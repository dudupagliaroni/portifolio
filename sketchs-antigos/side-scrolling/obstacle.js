function Obstacle(_grid, _x, _y) {
  this.width = 500;
  this.height = 500;
  this.grid = _grid;
  this.pos = createVector(_x, _y);
  this.vel = this.pos.copy();
  this.vel.setMag(5);

  this.update = function () {
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 + _y;
    this.pos.add(this.vel);
  };

  this.show = function () {
    fill(255, 255, 255);
    ellipse(this.pos.x, this.pos.y, this.width, this.height);
    fill(0);
    textSize(10);
    textFont("Helvetica");
    text("x: " + _x, this.pos.x - 5, this.pos.y);
    text("y: " + _y * -1, this.pos.x - 5, this.pos.y + 10);
  };
}
