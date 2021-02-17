
let inc = 0.001;
let start = 0;
let xoff = start;
let terrain = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let x = 0; x < width; x++) {
    stroke(255);
    // let y = random(height);
    let y = map(noise(xoff),0,1,height/2, height);
    terrain.push(y)
  //frameRate(2)
}

function draw() {
  background(51);
  
  stroke(255);
  noFill();
  beginShape();
  
  for (var x = 0; x < terrain.length; x++){
    vertex(x, terrain[y]);
    xoff += inc;
  }
  endShape();
  
  start += inc;
  
  //noLoop();
}
  



}
