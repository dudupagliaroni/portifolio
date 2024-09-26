function Laser(_grid, _ship) {
  this.grid = _grid;

  this.heading = _ship.heading;
  this.position = createVector();

  this.position.x =
    _grid.center.x - ship.gridPosition.x + 35 * cos(this.heading);
  this.position.y =
    _grid.center.y - ship.gridPosition.y + 35 * sin(this.heading);

  this.acc = createVector();
  this.acc.x = cos(this.heading);
  this.acc.y = sin(this.heading);

  this.laserSpeed = 12;
  this.laserLife = 50;
  this.size = 15;

  this.isHit = false;

  this.update = function () {
    this.acc.setMag(this.laserSpeed);
    this.position.add(this.acc);
    this.laserLife--;
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
