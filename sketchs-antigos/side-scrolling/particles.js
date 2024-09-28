function Particle(_ship) {

  this.position = createVector();
  this.velocity = createVector();
  this.heading = _ship.heading;
  this.alpha = 255;





  this.finished = function () {
    return this.alpha < 0;
  };

  this.addVelocity = function () {
    this.position.add(this.velocity);
    this.alpha -= 5;
  };

  this.show = function () {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.position.x, this.position.y, 16);
  };
}
