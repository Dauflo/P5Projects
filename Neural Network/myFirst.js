//Neural Network
var l1N1;
var l1N2;

var l2N1;

//List of points
var points = [];
var myPoints = [];

//Drawing lines
var p1, p2, p3, p4;

function setup() {
  createCanvas(500, 500);
  l1N1 = new Perceptron(3, 0.01);
  l1N2 = new Perceptron(3, 0.01);
  l2N1 = new Perceptron(2, 0.01);

  for (var i = 0; i < 200; i++) {
    points[i] = new Point();
  }

  p1 = new LinePoint(-1, f(-1));
  p2 = new LinePoint(1, f(1));

  p3 = new LinePoint(-1, g(-1));
  p4 = new LinePoint(1, g(1));
}

function draw() {
  background(255);
  stroke(0);
  line(p1.getPixelX(), p1.getPixelY(), p2.getPixelX(), p2.getPixelY());
  line(p3.getPixelX(), p3.getPixelY(), p4.getPixelX(), p4.getPixelY());

  points.forEach(function(p) {
    p.display();
  });

  myPoints.forEach(function(mp) {
    mp.display();
  });

  //Training
  points.forEach(function(p) {
    let inputs = [p.x, p.y, p.bias];

    l1N1.train(inputs, p.label);
    l1N2.train(inputs, p.label);

    let guessL1N1 = l1N1.guess(inputs);
    let guessL1N2 = l1N2.guess(inputs);

    let inputs2 = [guessL1N1, guessL1N2];

    l2N1.train(inputs2, p.label);

    let guessL2N1 = l2N1.guess(inputs2);

    p.guessLabel = guessL2N1;
    // console.log(guessL2N1);

    if (p.guessLabel == p.label) {
      fill(255);
    } else {
      fill(0);
    }
    noStroke();
    ellipse(p.getPixelX(), p.getPixelY(), 4, 4);

  });
}

function mousePressed() {
  if (mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0) {

    var x = mouseX;
    var y = mouseY;

    var mpt = new myPoint();
    mpt.x = map(x, 0, width, -1, 1);
    mpt.y = map(y, 0, height, 1, -1);
    console.log(mpt.x);
    console.log(mpt.y);

    let inputs = [mpt.x, mpt.y, mpt.bias];

    let guessL1N1 = l1N1.guess(inputs);
    let guessL1N2 = l1N2.guess(inputs);

    let inputs2 = [guessL1N1, guessL1N2];

    let guessL2N1 = l2N1.guess(inputs2);

    mpt.label = guessL2N1;

    myPoints.push(mpt);
  }
}
