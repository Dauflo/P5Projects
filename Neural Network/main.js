var brain;

var points = [];

var p1, p2;

function setup() {
  createCanvas(500, 500);
  brain = new Perceptron(3, 0.001);

  for (var i = 0; i < 10; i++) {
    points[i] = new Point();
  }


  p1 = new LinePoint(-1, f(-1));
  p2 = new LinePoint(1, f(1));
}

function draw() {
  background(255);
  stroke(0);
  line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());

  stroke(0, 0, 255);
  var p3 = new LinePoint(-1, brain.guessY(-1));
  var p4 = new LinePoint(1, brain.guessY(1));
  line(p3.getPixelX(), p3.getPixelY(), p4.getPixelX(), p4.getPixelY());

  points.forEach(function(p) {
    p.display();
  });

  points.forEach(function(p) {
    var inputs = [p.x, p.y, p.bias];

    brain.train(inputs, p.label);
    var guess = brain.guess(inputs);

    if (guess == p.label) {
      fill(0, 255, 0);
    } else {
      fill(255, 0, 0);
    }
    noStroke();
    ellipse(p.getPixelX(), p.getPixelY(), 4, 4);
  });
}

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {
    var x = mouseX;
    var y = mouseY;

    var pt = new Point();

    pt.x = map(x, 0, width, -1, 1);
    pt.y = map(y, 0, height, 1, -1);

    pt.label = updateLabel(pt.y, f(pt.x));

    points.push(pt);
  }
}
