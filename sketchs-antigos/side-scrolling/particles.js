function Particle(_ship, _grid) {
  this.heading = _ship.heading;
  this.acceleration = createVector();
  this.velocity = createVector();
  this.position = createVector();
  this.lifespan = 255;

  this.position.x =
    _grid.center.x -
    _ship.gridPosition.x -
    25 * cos(this.heading + random(-0.2, 0.2));
  this.position.y =
    _grid.center.y -
    _ship.gridPosition.y -
    25 * sin(this.heading + random(-0.2, 0.2));

  this.acceleration.x = -cos(this.heading + random(-0.2, 0.2));
  this.acceleration.y = -sin(this.heading + random(-0.2, 0.2));

  this.update = function () {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 20;
  };

  this.show = function () {
    stroke(255, this.lifespan);
    strokeWeight(2);
    fill(255, this.lifespan);
    ellipse(this.position.x, this.position.y, 2.5, 2.5);
  };

  this.isDead = function () {
    return this.lifespan < 0;
  };
}
