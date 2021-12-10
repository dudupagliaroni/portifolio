class Food {
  constructor() {
    //this.food = createVector(x, y);
  }

  update(snake) {
    let cols = width / scl;
    let rows = height / scl;

    let isempty = false;

    while(!isempty){
    this.pos = createVector(
      scl * floor(random(cols)),
      scl * floor(random(rows))
    );

    for (var i = 0; i < snake.tail.length; i++) {
      if (this.pos.x == snake.tail[i].x && this.pos.y == snake.tail[i].y) {
        isempty = false;
        console.log(isempty);
        break;
        
      } else {
        isempty = true;
        console.log(isempty);
        
      }
    }
  }
}

  show() {
    noStroke();
    fill(200, 50, 50);
    rect(this.pos.x, this.pos.y, scl);
  }
}
