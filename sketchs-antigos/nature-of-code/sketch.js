let mover;
let inputArray;

function setup() {
  createCanvas(800, 800);
  mover = new Mover();
  inputArray = [3, 6, -2, -5, 7, 3];
  console.log(solution(inputArray));
}

function draw() {
  background(111, 71, 157, 255);

  let gravity = createVector(0, 0.1);
  mover.applyForce(gravity);

  let wind = createVector(0.1, 0);
  mover.applyForce(wind);

  mover.update();
  mover.edges();
  mover.display();
}

function mouseReleased() {
  return true;
}

function solution(inputArray_) {
  inputArray_.sort();
  console.log(inputArray_.length)
  return inputArray_[inputArray_.length-1] * inputArray_[inputArray_.length-2];//sortedArray[inputArray_];
}
