class Bola {
  constructor(x, y, size) {
    this.pos = createVector(x, y);
    this.size = size;
    // this.vel = createVector(1, -1);
    this.vel = createVector(random(10), random(10));
    //this.acc = new p5.Vector(0, 0.1);
    this.mouse = createVector(mouseX, mouseY);
  }

  update() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
  }

  show() {
    stroke(255, 0, 200);
    //noStroke();
    fill(255, 0, 230);
    ellipse(this.pos.x, this.pos.y, this.size);
  }

  drawLine(){
    let v = new p5.Vector.sub(this.mouse, this.pos);
    stroke(0)
    line(this.pos.x, this.pos.y, v.x, v.y);
  }

  bounce() {
    if (this.pos.x > width - this.size / 2 - 1) {
      this.vel.mult(-1, 1);
    }
    if (this.pos.x < 0 + this.size / 2 + 1) {
      this.vel.mult(-1, 1);
    }
    if (this.pos.y > height - this.size / 2 - 1) {
      this.vel.mult(1, -1);
    }
    if (this.pos.y < 0 + this.size / 2 + 1) {
      this.vel.mult(1, -1);
    }
  }
}
