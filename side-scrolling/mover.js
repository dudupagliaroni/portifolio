function Mover() {
  this.width = 50;
  this.height = 100;
  this.pos = createVector(width/2-this.width/2, 400 - this.height);

  this.show = function () {
      fill(255,0,255);
    rect(this.pos.x, this.pos.y, this.width, this.height);
  };
}
