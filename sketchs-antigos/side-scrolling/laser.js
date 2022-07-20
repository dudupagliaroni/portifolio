function Laser(_grid, _ship) {
  this.width = 50;
  this.height = 50;
  this.grid = _grid;
  let dir = _ship.heading;
  this.posInGrid = _ship.relPos.copy();
  let _x = _ship.relPos.x + 50 * cos(dir);
  let _y = -_ship.relPos.y + 50 * sin(dir);

  console.log(_ship.heading);

  this.update = function () {
    this.posInGrid.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.posInGrid.y = this.grid.pos.y + this.grid.height / 2 + _y;
    _x += 18 * cos(dir);
    _y += 18 * sin(dir);
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(2.5);
    line(
      this.posInGrid.x,
      this.posInGrid.y,
      this.posInGrid.x + 15 * cos(dir),
      this.posInGrid.y + 15 * sin(dir)
    );
    pop();
  };

  this.showLocation = function () {
    textSize(10);
    textFont("Helvetica");
    text("x: " + Math.round(_x), this.posInGrid.x + 5, this.posInGrid.y + 15);
    text(
      "y: " + Math.round(_y) * -1,
      this.posInGrid.x + 5,
      this.posInGrid.y + 30
    );
  };
}