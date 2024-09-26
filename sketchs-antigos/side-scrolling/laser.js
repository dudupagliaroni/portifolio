function Laser(_grid, _ship) {
  this.grid = _grid;

  this.heading = _ship.heading;

  this.position = _grid.center.copy();
  let _x = _grid.center.x + 27 * cos(this.heading);
  let _y = _grid.center.y + 27 * sin(this.heading);

  this.laserSpeed = 0;
  this.laserLife = 10;
  this.size = 15;

  this.isHit = false;

  this.update = function () {
    this.addAceleration();
    this.position.x = _grid.center.x + this.position.x + _x;
    // this.position.y += _y;

    this.laserLife--;
    console.log(this.position.x);
  };

  this.addAceleration = function () {
    _x += this.laserSpeed * cos(this.heading);
    // _y += this.laserSpeed * sin(this.heading);
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(2.5);
    line(
      this.position.x,
      this.position.y,
      this.position.x - this.size * cos(this.heading),
      this.position.y - this.size * sin(this.heading)
    );
    pop();
  };
}
