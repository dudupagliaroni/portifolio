var xoff = 555;
var yoff = 1000;
var roff = 654;
var goff = 123;
var boff = 159;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //background(220);

  var x =map(noise(xoff), 0, 1, 0, height);
  xoff += 0.01;
  var y = map(noise(yoff), 0, 1, 0, height);
  yoff += 0.01;
  
  var r = map(noise(roff), 0, 1, 0, 255);
  roff += 0.02;
  var g = map(noise(goff), 0, 1, 0, 255);
  goff += 0.02;
  var b = map(noise(boff), 0, 1, 0, 255);
  boff += 0.02;


  fill(r,g,b);
  //noStroke();
  //fill(random(0,255), random(0,255), random(0,255))


  ellipse(x, y, (noise(roff)*100))

}
