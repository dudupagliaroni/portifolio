function Laser(_grid, _ship) {
  this.size = 5;
  this.grid = _grid;
  let dir = _ship.heading;
  this.posInGrid = _ship.relPos.copy();
  this.posInicial = this.posInGrid.copy();
  let _x = _ship.relPos.x + 50 * cos(dir);
  let _y = -_ship.relPos.y + 50 * sin(dir);
  this.laserSpeed = 12;
  this.laserLife = 50;

  this.update = function () {
    this.posInGrid.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.posInGrid.y = this.grid.pos.y + this.grid.height / 2 + _y;
    _x += this.laserSpeed * cos(dir);
    _y += this.laserSpeed * sin(dir);
    this.laserLife--;
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(2.5);
    line(
      this.posInGrid.x,
      this.posInGrid.y,
      this.posInGrid.x + this.size * cos(dir),
      this.posInGrid.y + this.size * sin(dir)
    );
    pop();
  };


}
