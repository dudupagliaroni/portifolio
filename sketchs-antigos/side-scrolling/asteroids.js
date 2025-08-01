function Asteroid(_grid, _x, _y) {
  this.name = "A" + floor(random(1000, 10000)) + "-" + floor(random(0, 99));
  this.isHit = false;
  this.isColliding = false;

  //localização
  this.grid = _grid;
  this.pos = createVector(_x, _y);

  //velocidade de rotação

  let rrs = random(-0.05, 0.05);
  let rs = 0.05;
  this.rotationSpeed = rrs;
  this.heading = 0;

  //trajetória
  let rd = random(0, 359);
  let d = 0.6;
  this.direction = p5.Vector.fromAngle(rd);

  //velocidade
  let rv = random(0.5, 3);
  let v = 1.5;
  this.direction.setMag(rv);

  this.vel = createVector();
  this.vel.add(this.direction);

  //numero de lados e criacao dos vertex
  this.r = floor(random(50, 60));
  let sideNumber = random(10, 20);
  let asteroidVertexs = [];

  for (let a = 0; a < sideNumber; a++) {
    asteroidVertexs.push(this.r + floor(random(-5, 5)));
  }

  this.update = function () {
    console.log(this.isColliding);
    if (_x > _grid.width / 2 - this.r) {
      let n = createVector(1, 0);
      this.vel.reflect(n);
      this.rotationSpeed = this.rotationSpeed * -1;
    }
    if (_x < -_grid.width / 2 + this.r) {
      let n = createVector(1, 0);
      this.vel.reflect(n);
      this.rotationSpeed = this.rotationSpeed * -1;
    }
    if (_y > _grid.height / 2 - this.r) {
      let n = createVector(0, 1);
      this.vel.reflect(n);
      this.rotationSpeed = this.rotationSpeed * -1;
    }
    if (_y < -_grid.height / 2 + this.r) {
      let n = createVector(0, 1);
      this.vel.reflect(n);
      this.rotationSpeed = this.rotationSpeed * -1;
    }

    if (this.isColliding) {
      console.log('teste')

      let perpendicular = createVector(-this.vel.y, this.vel.x);
      this.vel.rotate(perpendicular.heading());

      this.isColliding = false;

      console.log('teste2')
    }

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
    let angle = 0;
    for (let i = 0; i < asteroidVertexs.length; i++) {
      angle += TWO_PI / asteroidVertexs.length;
      var dx = asteroidVertexs[i] * cos(this.heading + angle);
      var dy = asteroidVertexs[i] * sin(this.heading + angle);
      vertex(this.pos.x + dx, this.pos.y + dy);
    }
    endShape(CLOSE);
    stroke("green");
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + 100 * cos(this.vel.heading()),
      this.pos.y + 100 * sin(this.vel.heading())
    );

    let perpendicular = createVector(-this.vel.y, this.vel.x);
    stroke("red");

    line(
      this.pos.x,
      this.pos.y,
      this.pos.x + 100 * cos(perpendicular.heading()),
      this.pos.y + 100 * sin(perpendicular.heading())
    );

    stroke("blue")
    
    pop();
  };

  this.text = function () {
    textSize(10);
    textFont("Helvetica");
    text("x: " + floor(_x), this.pos.x + 5, this.pos.y);
    text("y: " + floor(_y * -1), this.pos.x + 5, this.pos.y + 10);
    text("r: " + floor(this.r), this.pos.x + 5, this.pos.y + 20);
    // text("d: " + this.vel.heading(), this.pos.x + 5, this.pos.y + 30);
  };

  this.createVertices = function () {
    let angle = 0;
    let vertex = [];
    for (let i = 0; i < asteroidVertexs.length; i++) {
      angle += TWO_PI / asteroidVertexs.length;
      var dx = asteroidVertexs[i] * cos(this.heading + angle);
      var dy = asteroidVertexs[i] * sin(this.heading + angle);
      let v = createVector(this.pos.x + dx, this.pos.y + dy);
      vertex.push(v);
    }
    return vertex;
  };

  this.setVel = function (vel) {
    this.vel.set(vel);
  };

  this.setColliding = function (isColliding) {
    this.isColliding = isColliding;
  };
}
