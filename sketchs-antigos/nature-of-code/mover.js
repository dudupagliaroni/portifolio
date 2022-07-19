class Mover {
  constructor() {
    this.size = 100;
    this.position = createVector(width / 2, height / 2);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 100;
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  edges() {
    if (this.position.y >= height - this.size / 2) {
      this.position.y = height - this.size / 2;
      this.velocity.y *= -1;
    }
  }

  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }

  display() {
    stroke(0);
    strokeWeight(2);
    fill(245,115,65,255);
    ellipse(this.position.x, this.position.y, this.size);
  }
}
