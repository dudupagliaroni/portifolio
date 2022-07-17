function Laser(_grid, ship) {
  this.grid = _grid;
  this.pos = createVector();
  this.startPos = createVector();
  this.posInGrid = ship.relPos.copy();
  this.vel = p5.Vector.fromAngle(-ship.heading);

  // this.startPos.x = this.posInGrid.x  + (ship.r * cos(ship.heading));
  // this.startPos.y = this.posInGrid.y + (ship.r * sin(ship.heading));
  
  // this.posInGrid.add(this.startPos);

  this.pos.x = this.grid.pos.x + this.grid.width / 2 + this.posInGrid.x;
  this.pos.y = this.grid.pos.y + this.grid.height / 2 - this.posInGrid.y;

  this.update = function () {
    // this.pos.x = this.grid.pos.x + this.grid.width / 2 + this.posInGrid.x;
    // this.pos.y = this.grid.pos.y + this.grid.height / 2 - this.posInGrid.y;
    
    
    this.posInGrid.add(this.vel);
     
  };

  this.show = function () {
    push();
    stroke(0, 255, 0);
    strokeWeight(4);
    //translate(this.pos.x/2, this.pos.y/2);
    point(this.pos.x, this.pos.y);
    pop();
  };
}