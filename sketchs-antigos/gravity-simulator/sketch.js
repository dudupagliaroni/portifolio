/*
----- Coding Tutorial by Patt Vira ----- 
Name: Intro to matter.js (with p5.js)
Video Tutorial: https://youtu.be/cLXNxn5N-2Y

Connect with Patt: @pattvira
https://www.pattvira.com/
----------------------------------------
*/


const {Engine, Body, Bodies, Composite} = Matter;

let engine;
let boxes = []; let ground;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
 
  ground = new Ground(200, 300, 400, 10);
}

function draw() {
  background(220);
  Engine.update(engine);
  for (let i=0; i<boxes.length; i++) {
    boxes[i].display();
  }
  ground.display();
}

function mousePressed() {
  boxes.push(new Rect(mouseX, mouseY, 20, 20));
}
