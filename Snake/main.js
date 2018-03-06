// 0 : case vide
// 1 : snake
// 2 : food

var gridSize;
var largeur;
var hauteur;

var snakeSize;
var snake;
var dir;

var food;


function setup() {
  	var sketch = createCanvas(600, 600);
    sketch.parent('sketch-holder');
  	sketch.id('canvas');

    gridSize = 20;

    largeur = width / gridSize;
    hauteur = height / gridSize;

    snakeSize = 1;
    dir = 0;

    snake = [];
    snake[0] = createVector(gridSize/2, gridSize/2);

    food = setFood();

    updateScore();

}

function draw() {
  frameRate(10);
  updateSnake();
  updateScore();

  stroke(51);
  for (var x = 0; x < gridSize; x++) {
    for (var y = 0; y < gridSize; y++) {
      fill(0);
      rect(x * largeur, y * hauteur, largeur, hauteur);
    }
  }

  for (var i = 0; i < snakeSize; i++) {
    fill(255);
    rect(snake[i].x * largeur, snake[i].y * hauteur, largeur, hauteur);
  }

  fill(255, 0, 0);
  rect(food.x * largeur, food.y * hauteur, largeur, hauteur);

}

function updateScore() {
  select('#score').html(snakeSize);
}

function setFood() {
  var f;

  while(f == null) {
    var x = Math.floor(random(gridSize));
    var y = Math.floor(random(gridSize));

    for (var i = 0; i < snakeSize; i++) {
      if ((snake[i].x != x && snake[i].y != y)) {
        f = createVector(x, y);
        return f;
      }
    }
  }
}

function updateSnake() {
  for (var i = snakeSize - 1; i > 0; i--) {
    snake[i].x = snake[i-1].x;
    snake[i].y = snake[i-1].y;
  }

  switch (dir) {
    case 0:
      snake[0].y--;
      break;
    case 1:
      snake[0].y++;
      break;
    case 2:
      snake[0].x++;
      break;
    case 3:
      snake[0].x--;
      break;
  }

  if (snake[0].x < 0) {
    snake[0].x = gridSize - 1;
  } else if (snake[0].x > gridSize - 1) {
    snake[0].x = 0;
  }

  if (snake[0].y < 0) {
    snake[0].y = gridSize - 1;
  } else if (snake[0].y > gridSize - 1) {
    snake[0].y = 0;
  }

  if (snake[0].x == food.x && snake[0].y == food.y) {
			food = setFood();
      snake.push(createVector(snake[snakeSize - 1].x, snake[snakeSize - 1].y));
			snakeSize++;

		}

		for (var i = 2; i < snakeSize; i++) {
			if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {

				setup();
			}
		}
}

function keyPressed() {
  if (keyCode == UP_ARROW && dir != 1) {
    dir = 0;
  } else if (keyCode == DOWN_ARROW && dir != 0) {
    dir = 1;
  } else if (keyCode == LEFT_ARROW && dir != 2) {
    dir = 3;
  } else if (keyCode == RIGHT_ARROW && dir != 3) {
    dir = 2;
  }
}
