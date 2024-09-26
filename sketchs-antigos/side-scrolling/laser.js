function Laser(_grid, _ship) {
  this.isHit = false;

  this.grid = _grid;
  let dir = _ship.heading;
  this.position = _ship.relPos.copy();
  let _x = _ship.relPos.x + 27 * cos(dir);
  let _y = -_ship.relPos.y + 27 * sin(dir);

  this.laserSpeed = 12;
  this.laserLife = 50;
  this.size = 15;

  this.update = function () {
    _x += this.laserSpeed * cos(dir);
    _y += this.laserSpeed * sin(dir);
    this.position.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.position.y = this.grid.pos.y + this.grid.height / 2 + _y;
    this.laserLife--;
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(2.5);
    line(
      this.position.x,
      this.position.y,
      this.position.x - this.size * cos(dir),
      this.position.y - this.size * sin(dir)
    );
    pop();
  };
}
