let ship;
let grid;

let asteroids = [];
let numAsteroids = 2;
let lasers = [];
let particles = [];

function setup() {
  let canvasSize = 600;
  let gridSize = 400;
  const CANVAS = createCanvas(canvasSize, canvasSize);
  CANVAS.parent("canvas");

  grid = new Grid(gridSize);
  ship = new Ship(grid);
  generateAsteroids(numAsteroids);
}

function draw() {
  frameRate();
  background(0);
  updateAllobjects();
  showCoordenates();

  if (ship.isBoosting) {
    generateParticles();
    console.log(particles.length);
  }
}

//update
function updateAllobjects() {
  updateGrid();
  checkLaserAsteroidCollision();
  checkAsteroidAsteroidCollision();
  updateShip();
  updateAsteroids();
  updateLasers();
  updateParticles();
}

//updates
function updateGrid() {
  grid.drawLines();
  grid.updatePosition(ship);
}

function updateShip() {
  ship.turn();
  ship.update();
  ship.updateGridPosition();
  ship.show();
}

function updateLasers() {
  for (var i = 0; i < lasers.length; i++) {
    lasers[i].update();
    lasers[i].show();
  }
  deleteLaser();
}

function updateAsteroids() {
  deleteAsteroid();
  for (let i = 0; i < asteroids.length; i++) {
    asteroids[i].update();
    asteroids[i].show();
    asteroids[i].text();
  }
}

function updateParticles() {
  for (let i = this.particles.length - 1; i >= 0; i--) {
    let p = this.particles[i];
    p.update();
    p.show();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
}

function updateParticles() {
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

//controles
function keyPressed() {
  if (keyCode == RIGHT_ARROW) {
    ship.setRotaion(0.03);
  } else if (keyCode == LEFT_ARROW) {
    ship.setRotaion(-0.03);
  } else if (keyCode == UP_ARROW) {
    ship.setBoost(true);
  } else if (keyCode == 32) {
    lasers.unshift(new Laser(grid, ship));
  }
}

function keyReleased() {
  if (keyCode == RIGHT_ARROW || keyCode == LEFT_ARROW) {
    ship.setRotaion(0);
  }
  if (keyCode == UP_ARROW) {
    ship.setBoost(false);
  }
}

//gerar objetos e particulas na tela
function generateAsteroids(num) {
  for (let i = 0; i < num; i++) {
    asteroids[i] = new Asteroid(
      grid,
      // 0,
      // 0
      floor(random(-grid.width / 2 + 100, grid.height / 2 - 200)),
      floor(random(-grid.height / 2 + 100, grid.height / 2 - 200))
    );
  }
}

function generateParticles() {
  particles.push(new Particle(ship, grid));
}

//deletar objetos da tela
function deleteLaser() {
  for (i = 0; i < lasers.length; i++) {
    if (lasers[i].laserLife < 1 || lasers[i].isHit) {
      lasers.pop();
    }
  }
}

function deleteAsteroid() {
  for (i = 0; i < asteroids.length; i++) {
    if (asteroids[i].isHit) {
      asteroids.splice(i, 1);
    }
  }
}

//colisoes
function checkLinePolyCollision(line, poly) {
  return collidePointPoly(line.position.x, line.position.y, poly);
}

function checkPolyPolyCollision(poly1, poly2) {
  return collidePolyPoly(poly1, poly2);
}

function checkLaserAsteroidCollision() {
  for (var i = 0; i < lasers.length; i++) {
    for (var j = 0; j < asteroids.length; j++) {
      if (checkLinePolyCollision(lasers[i], asteroids[j].createVertices())) {
        console.log("Acertou", asteroids[j].name);
        asteroids[j].isHit = true;
        lasers[i].isHit = true;
      }
    }
  }
}

function checkAsteroidAsteroidCollision() {
  for (var i = 0; i < asteroids.length; i++) {
    for (var j = 0; j < asteroids.length; j++) {
      if (asteroids[i].name != asteroids[j].name) {
        if (
          checkPolyPolyCollision(
            asteroids[i].createVertices(),
            asteroids[j].createVertices()
          )
        ) {
          let dist = p5.Vector.dist(asteroids[i].pos, asteroids[j].pos)

          asteroids[i].isColling = true;
          asteroids[j].isColliding = true;

        } else {
          asteroids[i].isColling = false;
          asteroids[j].isColliding = false;
        }
      }
    }
  }
}

//mostrar infos na tela
function showCoordenates() {
  stroke(0);
  fill(255);
  textSize(15);
  textFont("Helvetica");
  text("ship.pos.x: " + Math.round(-ship.gridPosition.x), 30, 30);
  text("ship.pos.y: " + Math.round(ship.gridPosition.y), 30, 50);
  text("ship.fuel: " + Math.round(ship.fuel), 30, 70);
  text("lasers: " + lasers.length, 30, 90);
  text("asteroids: " + asteroids.length, 30, 110);
  // text("GridCenter: " + grid.center, 30, 130);
}
