function Obstacle(_grid, _x, _y) {
  this.width = 50;
  this.height = 50;
  this.grid = _grid;
  this.pos = createVector();

  this.update = function () {
    this.pos.x = grid.pos.x + grid.width / 2 + _x;
    this.pos.y = grid.pos.y + grid.height / 2 + _y;
  };

  this.show = function () {
    fill(255, 255, 255);
    rect(this.pos.x, this.pos.y, this.width, this.height);
    fill(0);
    textSize(10);
    textFont("Helvetica");
    //relative position to center
    // text("x: " + (this.pos.x - width / 2), this.pos.x + 5, this.pos.y + 15);
    // text("y: " + (this.pos.y - height / 2)*-1, this.pos.x + 5, this.pos.y + 30);
    text("x: " + _x, this.pos.x + 5, this.pos.y + 15);
    text("y: " + _y * -1, this.pos.x + 5, this.pos.y + 30);
  };
}
