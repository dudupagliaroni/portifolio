function Asteroid(_grid, _x, _y) {

  this.name = "A" + floor(random(1000, 10000))
  this.isHit = false;

  //localização
  this.grid = _grid;
  this.pos = createVector(_x, _y);
  this.heading = random(0, 359);
  
  //velocidade inicial e direcao
  this.vel = createVector();
  this.rotationSpeed = random(-0.005, 0.005);
  let force = p5.Vector.fromAngle(this.heading);
  force.setMag(random(0.5, 5));
  this.vel.add(force.mult(0.3));

  //numero de lados e criacao dos vertex
  this.r = floor(random(50, 200));
  let sideNumber = random(5, 20);
  let asteroidVertexs = [];

  for (let a = 0; a < sideNumber; a++) {
    asteroidVertexs.push(this.r + floor(random(-20, 20)));
  }

  this.update = function () {
    _x += this.vel.x;
    _y += this.vel.y;
    this.pos.x = this.grid.pos.x + this.grid.width / 2 + _x;
    this.pos.y = this.grid.pos.y + this.grid.height / 2 + _y;
    this.heading += this.rotationSpeed;
  };

  this.show = function () {
    push();
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
    noFill();
    beginShape();
    let angle = 0
    for (let i = 0; i < asteroidVertexs.length; i++) {
      angle += TWO_PI / asteroidVertexs.length
      var dx = asteroidVertexs[i] * cos(this.heading + angle);
      var dy = asteroidVertexs[i] * sin(this.heading + angle);
      vertex(this.pos.x + dx, this.pos.y + dy);
      point(this.pos.x + dx, this.pos.y + dy);
    }
    endShape(CLOSE);
    pop();
  };

  this.text = function () {
    textSize(10);
    textFont("Helvetica");
    text("x: " + floor(_x), this.pos.x + 5, this.pos.y);
    text("y: " + floor(_y) * -1, this.pos.x + 5, this.pos.y + 10);
    text("r: " + floor(this.r), this.pos.x + 5, this.pos.y + 20);
  };


  this.createVertices = function() {
    let angle = 0
    let vertex = []
    for (let i = 0; i < asteroidVertexs.length; i++) {
      angle += TWO_PI / asteroidVertexs.length
      var dx = asteroidVertexs[i] * cos(this.heading + angle);
      var dy = asteroidVertexs[i] * sin(this.heading + angle);
      let v = createVector(this.pos.x + dx, this.pos.y + dy);
      vertex.push(v)
    }
    return vertex;
  }
}
