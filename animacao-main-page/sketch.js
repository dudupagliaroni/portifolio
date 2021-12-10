function setup() {
  let canvasDiv = document.getElementById("main-page");
  let divWidth = canvasDiv.offsetWidth;
  let divHeight = canvasDiv.offsetHeight;
  let canvas = createCanvas(divWidth+16, divHeight);
  canvas.parent("main-page");
  background(84, 37, 129);
}

function draw() {
  stroke(0);
  
  rect(width / 3, height / 3, 400, 400);
  
}
