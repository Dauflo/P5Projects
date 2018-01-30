/*Alphabet : F
Constants : +, −
Axiom : F
Production rules : F → F+F--F+F*/

var axiom = "F--F--F";
var sentence = axiom;

var len = 100;

var angle;

function setup() {
	createCanvas(1000,1000);
	var btn = createButton("Next step");
	angle = radians(60);
	btn.mousePressed(nextStep);
	turtle();
}

function draw() {
}

function nextStep() {
	len *= 0.5;

	var nextSentence = '';

	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;

		if(current == 'F') {
			found = true;
			nextSentence += 'F+F--F+F';
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	turtle();
}

function turtle() {
	background(0);
	resetMatrix();
	translate(width/1.5, height/1.5);
	stroke(255);

	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);

		if (current == 'F') {
			line(0, 0, 0, -len);
			translate(0, -len);
		} else if (current == '+') {
			rotate(angle);
		} else if (current == '-') {
			rotate(-angle);
		}
	}
}