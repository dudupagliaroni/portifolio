function PolyShape(grid) {
  var hit = false;
  const poly = [];

  this.update = function () {
    poly[0] = createVector(
      grid.pos.x + grid.width / 2 + 200,
      grid.pos.y + grid.height / 2 + 331
    );
    poly[1] = createVector(
      grid.pos.x + grid.width / 2 + 110,
      grid.pos.y + grid.height / 2 + 211
    );
    poly[2] = createVector(
      grid.pos.x + grid.width / 2 + 120,
      grid.pos.y + grid.height / 2 + 123
    );
    poly[3] = createVector(
      grid.pos.x + grid.width / 2 + 490,
      grid.pos.y + grid.height / 2 + 133
    );
  };

  this.show = function () {
    fill(0, 255, 0);
    beginShape();
    for (const { x, y } of poly) vertex(x, y);
    endShape(CLOSE);

    circle(mouseX, mouseY, 10);

    hit = collidePointPoly(mouseX, mouseY, poly);
    stroke(hit ? color("red") : 0);
    print("colliding?", hit);
  };
}
