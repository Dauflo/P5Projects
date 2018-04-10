function Perceptron(nbWei, c) {
  this.weights = [];
  this.c = c;
  for (let i = 0; i < nbWei; i++) {
    this.weights[i] = random(-1, 1);
  }

  this.guess = function(inputs) {
    var sum = 0;

    for (let i = 0; i < this.weights.length; i++) {
      sum += inputs[i] * this.weights[i];
    }

    return sign(sum);
  }

  this.train = function(inputs, target) {
    let guess = this.guess(inputs);
    let error = target - guess;

    for (let i = 0; i < this.weights.length; i++) {
      this.weights[i] += this.c * error * inputs[i];
    }
  }

  this.guessY = function(x) {
    let w0 = this.weights[0];
    let w1 = this.weights[1];
    let w2 = this.weights[2];

    return -(w2 / w1) - (w0 / w1) * x;
  }
}

function sign(n) {
  if (n > 0.5) {
    return 1;
  } else if (n < -0.5){
    return -1;
  } else {
    return 0;
  }
}
