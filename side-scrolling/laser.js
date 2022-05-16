function Laser(_grid, shipRelPos, heading) {
  this.grid = _grid;
  this.pos = createVector();
  this.posInGrid = shipRelPos.copy();
  this.vel = p5.Vector.fromAngle(-heading);
  this.vel.setMag(10);

  this.update = function () {
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + this.posInGrid.x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 - this.posInGrid.y;
    this.posInGrid.add(shipRelPos.vel);
    this.posInGrid.add(this.vel);
  };

  this.addVel = function () {
    this.pos.add(this.vel);
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(4);
    //  translate(this.pos.x/2, this.pos.y/2);
    point(this.pos.x, this.pos.y);
    pop();
  };
}
