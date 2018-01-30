var grid = [];
var gridSize = 200;

function setup() {
	createCanvas(400,400);
	for (var i = 0; i < gridSize; i++) {
		grid[i] = [];
		for (var j = 0; j < gridSize; j++) {
			grid[i][j] = 0;
		}
	}
	grid[gridSize/2][0] = 1;
}

function draw() {
	//background(0);
	gestion();
	for (var i = 0; i < gridSize; i++) {
		for (var j = 0; j < gridSize; j++) {
			noStroke();
			fill(grid[i][j] * 255);
			rect(i * (width / gridSize), j * (height / gridSize), width / gridSize, height / gridSize);
		}
	}
}

function gestion() {
	for (var j = 0; j < gridSize; j++) {
		for (var i = 0; i < gridSize - 2; i++) {

			var next = '';
			for (var nextI = i; nextI < i + 3; nextI++) {
			next += '' + grid[nextI][j];
			}
			switch(next) {
				case '000':
					grid[i+1][j+1] = 0;
					break;
				case '001':
					grid[i+1][j+1] = 1;
					break;
				case '010':
					grid[i+1][j+1] = 1;
					break;
				case '011':
					grid[i+1][j+1] = 1;
					break;
				case '100':
					grid[i+1][j+1] = 1;
					break;
				case '101':
					grid[i+1][j+1] = 0;
					break;
				case '110':
					grid[i+1][j+1] = 0;
					break;
				case '111':
					grid[i+1][j+1] = 0;
					break;
			}
		}
	}
}