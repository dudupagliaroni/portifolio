class Snake {
  constructor(x, y) {
    this.total = 0;
    this.tail = [];
    this.dir = 1;
    this.tail[0] = createVector(x, y);
    this.tail[1] = createVector(x, y);
    this.tail[2] = createVector(x, y);
  }

  isDead() {
    for (var i = 1; i < this.tail.length; i++) {
      if (this.tail[0].x == this.tail[i].x && this.tail[0].y == this.tail[i].y) {
          showGameOverMessage();
          console.log("YOU LOSE")
          noLoop();
      }
    }
  }

  createpart() {
    this.tail[this.total + 3] = createVector(this.tail[1].x, this.tail[1].y);
  }

  foodwaseaten(food) {
    console.log(food.pos.x);
    if (this.tail[0].x == food.pos.x && this.tail[0].y == food.pos.y) {
      return true;
    } else {
      return false;
    }
  }

  update() {
    for (var i = 0; i < this.tail.length - 1; i++) {
      let _x = this.tail[this.tail.length - 2 - i].x;
      let _y = this.tail[this.tail.length - 2 - i].y;

      this.tail[this.tail.length - 1 - i].x = _x;
      this.tail[this.tail.length - 1 - i].y = _y;
    }

    switch (this.dir) {
      case 0:
        this.tail[0].y = this.tail[0].y - scl;
        break;
      case 1:
        this.tail[0].x = this.tail[0].x + scl;
        break;
      case 2:
        this.tail[0].y = this.tail[0].y + scl;
        break;
      case 3:
        this.tail[0].x = this.tail[0].x - scl;
        break;
    }

    if (this.tail[0].x >= width) {
      this.tail[0].x = 0;
    }
    if (this.tail[0].x < 0) {
      this.tail[0].x = width - scl;
    }
    if (this.tail[0].y >= height) {
      this.tail[0].y = 0;
    }
    if (this.tail[0].y < 0) {
      this.tail[0].y = height - scl;
    }
  }

  show() {
    stroke(100);
    for (var i = 0; i < this.tail.length; i++) {
      if (this.tail[i] == this.tail[0]) {
        fill(0, 255, 0);
      } else {
        fill(0, 150, 0);
      }
      rect(this.tail[i].x, this.tail[i].y, scl);
    }
  }

  move(key) {
    switch (key) {
      case UP_ARROW:
        if (this.dir != 2) {
          this.dir = 0;
        }
        break;
      case DOWN_ARROW:
        if (this.dir != 0) {
          this.dir = 2;
        }
        break;
      case RIGHT_ARROW:
        if (this.dir != 3) {
          this.dir = 1;
        }
        break;
      case LEFT_ARROW:
        if (this.dir != 1) {
          this.dir = 3;
        }
        break;
    }
  }
}
