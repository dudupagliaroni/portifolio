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
    let center = createVector(width / 2, height / 2);
    this.acc = p5.Vector.sub(center, this.pos);
    this.acc.setMag(0.1);
    this.vel.add(this.acc);
    //console.log(this.vel.mag());
    //console.log(this.vel.toString);
    this.vel.limit(4);
    this.pos.add(this.vel);
    //console.log(this.vel);
    this.r = map(
      dist(width / 2, height / 2, this.pos.x, this.pos.y),
      56,
      118,
      0,
      255
    );
    this.b = map(this.vel.y, -5, 5, 0, 255);
    this.g = map(this.vel.x, -5, 5, 0, 255);
  }

  show() {
    console.log(dist(width / 2, height / 2, this.pos.x, this.pos.y));
    console.log(this.r);
    noStroke();
    //stroke(255);
    
    fill(this.r, this.r, 100);
    ellipse(this.pos.x, this.pos.y, 5);
    strokeWeight(4);
    stroke(255);
    point(width/2, height/2)
  }
}
