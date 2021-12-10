let scl = 30;
let snake;
function setup() {
  frameRate(6);
  let canvas = createCanvas(450, 450);
  canvas.parent("canvas-p5");

  snake = new Snake(scl, scl);
  food = new Food();
  food.update(snake);
}

function draw() {
  background(51);
  drawLines();

  food.show();
  snake.update();
  snake.isDead();
  snake.show();
  if (snake.tail[0].x == food.pos.x && snake.tail[0].y == food.pos.y) {
    snake.createpart();
    snake.total++;
    food.update(snake);
    changeText(snake.total * 10);
  }
}

function drawLines() {
  stroke(150);
  for (var i = 0; i < width / scl; i++) {
    line(0, scl * i, width, scl * i);
    line(scl * i, 0, scl * i, height);
  }
}

function keyPressed() {
  snake.move(keyCode);
}

function changeText(text) {
  document.getElementById("scoreText").innerHTML = text;
}

function resetGame() {
  document.location.reload();
}

function showGameOverMessage(){
document.getElementById("game-over-text").style.visibility = "visible";
}
