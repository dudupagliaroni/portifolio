function Laser(_grid, shipRelPos, heading) {
  this.grid = _grid;
  this.pos = createVector();
  this.posInGrid = shipRelPos.copy();
  this.vel = p5.Vector.fromAngle(heading);
  this.vel.setMag(5git);

  this.update = function () {
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + this.posInGrid.x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 - this.posInGrid.y;
    this.pos.add(this.vel);
  };

  this.show = function () {
    push();
    stroke(255);
    strokeWeight(4);
    point(this.pos.x, this.pos.y);
    pop();
  };
}
