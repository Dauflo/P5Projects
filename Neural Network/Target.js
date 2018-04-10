function LinePoint(x, y) {
  this.x = x;
  this.y = y;
  this.label;

  if (this.x > this.y) {
    this.label = 1;
  } else {
    this.label = -1;
  }

  this.getPixelX = function() {
    return map(this.x, -1, 1, 0, width);
  }

  this.getPixelY = function() {
    return map(this.y, -1, 1, height, 0);
  }
}

function myPoint() {
  this.x;
  this.y;
  this.label;
  this.bias = 0;

  this.getPixelX = function() {
    return map(this.x, -1, 1, 0, width);
  }

  this.getPixelY = function() {
    return map(this.y, -1, 1, height, 0);
  }

  this.display = function() {
    stroke(0);

    if (this.label == 1) {
      fill(255, 0, 0);
    } else if (this.label == 0){
      fill(0, 255, 0);
    } else if (this.label == -1){
      fill(0, 0, 255);
    } else {
      fill(0);
    }

    ellipse(this.getPixelX(), this.getPixelY(), 16, 16);
  }
}

function Point() {
  this.x = random(-1, 1);
  this.y = random(-1, 1);
  this.label;
  this.bias = 1;
  this.guessLabel;


  var line1Y = f(this.x);
  var line2Y = g(this.x);

  this.label = updateLabel(this.y, line1Y, line2Y);



  this.getPixelX = function() {
    return map(this.x, -1, 1, 0, width);
  }

  this.getPixelY = function() {
    return map(this.y, -1, 1, height, 0);
  }

  this.display = function() {
    stroke(0);

    if (this.label == 1) {
      fill(255, 0, 0);
    } else if (this.label == 0){
      fill(0, 255, 0);
    } else {
      fill(0, 0, 255);
    }

    ellipse(this.getPixelX(), this.getPixelY(), 16, 16);
  }
}

function f(x) {
  return 0 * x - 0.2;
}

function g(x) {
  return 0 * x + 0.4;
}

function updateLabel(y, l1Y, l2Y) {
  if (y >= l2Y) {
    return 1;
  } else if (y < l2Y && y >= l1Y){
    return 0;
  } else {
    return -1;
  }
}
