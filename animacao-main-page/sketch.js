function setup() {
  let canvasDiv = document.getElementById("main-page");
  let divWidth = canvasDiv.offsetWidth;
  let divHeight = canvasDiv.offsetHeight;
  let canvas = createCanvas(800, 800);
  canvas.parent("main-page");
}

function draw() {
  stroke(0);
  rect(width / 2, height / 2, 400, 400);
  background(84, 37, 100);
}
