var b;
var pipes = [];

var count;

var g;

function setup() {
	var sketch = createCanvas(300, 500);
  sketch.parent('sketch-holder');
	sketch.id('canvas');
	b = new Bird(15, height/2);
	pipes.push(new Pipe());
	g = createVector(0, 0.1);
	count = 0;
	select('#score').html(count);
}

function draw() {
	background(0);
	for (var i = pipes.length - 1; i >= 0; i--) {
		if (pipes[i].middle()) {
			pipes.push(new Pipe());
		}
		if (pipes[i].out()) {
			pipes.splice(i, 1);
		}
		pipes[i].gestion();
	}
	b.gestion(g, pipes);

	if (b.passePipe(pipes)) {
		count++;
		select('#score').html(count);
	}
}

function keyPressed() {
	b.jump();
}
