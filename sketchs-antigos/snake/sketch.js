let scl = 5;
let snake;
let resetButton;
let sliderR;
let sliderG;
let sliderB;
let inputWidth;

function setup() {
  // frameRate(5);
  let canvas = createCanvas(1000, 1000);
  canvas.parent("canvas-p5");
  //resetButton = createButton("Reset");
  sliderR = createSlider(0, 255, 100, 1);
  //inputWidth = createInput(400);
  createP("r");
  sliderG = createSlider(0, 255, 100, 1);
  createP("g");
  sliderB = createSlider(0, 255, 100, 1);
  createP("b");
  snake = new Snake(scl, scl);
  food = new Food();
  food.update(snake);
}

function draw() {
  background(51);
  // drawLines();

  food.show();
  snake.update();
  snake.isDead();
  snake.show(sliderR.value(), sliderG.value(), sliderB.value());
  if (snake.tail[0].x == food.pos.x && snake.tail[0].y == food.pos.y) {
    snake.createPart();
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

function showGameOverMessage() {
  document.getElementById("game-over-text").style.visibility = "visible";
}
