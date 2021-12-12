class Mover {
  increment = 17;
  r = 0;
  b = 0;
  g = 0;

  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(10, 5);
    this.vel.mult(random(100));
  }

  update() {
    let mouse = createVector(width / 2, height / 2);
    this.acc = p5.Vector.sub(mouse, this.pos);
    this.acc.setMag(0.12);
    this.vel.add(this.acc);
    this.vel.limit(5.5);
    this.pos.add(this.vel);
    //console.log(this.vel);
    this.r = map(
      dist(width / 2, height / 2, this.pos.x, this.pos.y),
      93,
      180,
      0,
      255
    );
    this.b = map(this.vel.y, -5, 5, 0, 255);
    this.g = map(this.vel.x, -5, 5, 0, 255);
  }

  show() {
    console.log(dist(width / 2, height / 2, this.pos.x, this.pos.y));
    //console.log(this.r);
    noStroke();
    //stroke(255);
    
    fill(this.r/10, 50, this.r);
    ellipse(this.pos.x, this.pos.y, 5);
    strokeWeight(4);
    stroke(255);
    point(width/2, height/2)
  }
}
