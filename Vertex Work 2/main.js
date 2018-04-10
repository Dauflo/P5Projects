var pts = [];

function setup() {
  createCanvas(500, 500);
  for (var i = 0; i < 20; i++) {
    var p = new Point(random(width), random(height));
    pts.push(p);
  }
}

function draw() {
  background(0);
  for (var i = 0; i < pts.length; i++) {
    for (var j = 0; j < pts.length; j++) {
      if (j != i) {
        pts[i].createConnection(pts[j].pos);
      }
    }
    pts[i].gestion();
    pts[i].update();
    pts[i].display();
  }
}

function Point(x, y) {
  this.pos = createVector(x, y);
  this.vel = createVector(random(-1, 1), random(-1, 1));
  this.acc = createVector();
  this.maxspeed = 1;
  this.maxforce = 0.5;
  this.r = 5;

  this.display = function() {
    fill(200);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.r);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    this.outBound();
  }

  this.gestion = function() {
    var mouse = createVector(mouseX, mouseY);
    var flee = this.flee(mouse);

    flee.mult(2);
    this.applyForce(flee);
  }

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.outBound = function() {
    if (this.pos.x < 0) {
      this.pos.x = width;
    } else if (this.pos.x > width){
      this.pos.x = 0;
    }

    if (this.pos.y < 0) {
      this.pos.y = height;
    } else if (this.pos.y > height) {
      this.pos.y = 0;
    }
  }

  this.createConnection = function(target) {
    noFill();
    stroke(155);
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();

    if (d < 100) {
      beginShape();
      vertex(this.pos.x, this.pos.y);
      vertex(target.x, target.y);
      endShape();
    } else {
      return;
    }
  }

  this.flee = function(target) {
    var desired = p5.Vector.sub(target, this.pos);
    var d = desired.mag();

    if (d < 50) {
      desired.setMag(this.maxspeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxforce);
      return steer;
    } else {
      return createVector();
    }
  }
}
