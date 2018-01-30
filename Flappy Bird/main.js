var b;
var g;
var pList = [];

function setup() {
	createCanvas(400,400);
	g = createVector(0, 0.1);
	b = new Bird();
	pList.push(new Pipe());
}

function draw() {
	background(0);
	b.update(g);
	b.display();
	if (this.b.pos.y > height) {
		//noLoop();
		console.log("Hit the ground !");
	}

	for (var i = pList.length - 1; i >= 0; i--) {
		pList[i].update();
		pList[i].display();
		if (pList[i].posX == width/2) {
			pList.push(new Pipe());
		}
		if (pList[i].posX < -10) {
			pList.splice(i, 1);
		}
	}
}

function Bird() {
	this.pos = createVector(10, width/2);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);

	this.display = function() {
		fill(255);
		noStroke();
		ellipse(this.pos.x, this.pos.y, 5, 5);
	}

	this.update = function(force) {
		this.acc.add(force);
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	this.jump = function() {
		this.vel.add(createVector(0, -4));
	}
}

function Pipe() {
	this.posX = width;
	this.posY = 0;
	this.e = random(50, 300);

	this.display = function() {
		noStroke();
		fill(255);
		rect(this.posX, this.posY, 10, this.e);
		rect(this.posX, this.e + 60, 10, height - this.e)
	}

	this.update = function() {
		this.posX--;
	}
}

function mousePressed() {
	b.jump();
}