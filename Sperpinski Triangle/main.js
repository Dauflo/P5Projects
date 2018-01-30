//L system :
//Variables : F and x
//Axiam : F
//Rule : F -> X-F-X and X -> F+X+F

var axiom = "F";

var sentence = axiom;

var angle;

var len = 100;


function setup() {
	createCanvas(500,500);
	background(0);

	turtle();

	angle = radians(60);

	var btn = createButton("NextStep");
	btn.mousePressed(nextStep);
}

function draw() {
}

function nextStep() {
	//len *= 0.5;

	//rotate(PI);
	var nextSentence = '';
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);
		var found = false;

		if (current == 'F') {
			found = true;
			nextSentence += 'X-F-X';
		} else if (current == 'X') {
			found = true;
			nextSentence += 'F+X+F';
		}
		if (!found) {
			nextSentence += current;
		}
	}
	sentence = nextSentence;
	console.log(sentence);
	turtle();
}

function turtle() {
	background(0);
	len *= 0.65;
	translate(width, height);
	stroke(255);
	for (var i = 0; i < sentence.length; i++) {
		var current = sentence.charAt(i);

		if (current == 'F' || current == 'X') {
			line(0, 0, -len, 0);
			translate(-len, 0);
		} else if (current == '+') {
			rotate(angle);
		} else if (current == '-') {
			rotate(-angle)
		}
	}
}