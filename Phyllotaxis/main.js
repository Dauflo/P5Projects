var n = 0;
var c = 5;

var redC = 0;
var greenC = 0;
var blueC = 0;

function setup() {
	createCanvas(800,800);
	angleMode(DEGREES);
	colorMode(HSB);
	background(0);
}

function draw() {
	translate(width / 2, height / 2);
	var phi = n * 137.5;
	var r = c * sqrt(n);

	var x = r * cos(phi);
	var y = r * sin(phi);

/*	if (n % 3 == 0) {
		redC = 255;
		greenC = 0;
		blueC = 0;
	} else if (n % 3 == 1) {
		redC = 0;
		greenC = 255;
		blueC = 0;
	} else if (n % 3 == 2) {
		redC = 0;
		greenC = 0;
		blueC = 255;
	}*/


	fill(n % 256, 255, 255);
	ellipse(x, y, 5, 5);


	n++;

}