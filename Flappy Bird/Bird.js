class Bird {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector();
    this.acc = createVector();
    this.maxspeed = 5;
    this.r = 20;
  }

  display() {
    fill(255);
    ellipse(this.pos.x, this.pos.y, this.r, this.r);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  gestion(force, list) {
    this.applyForce(force);
    this.update();
    this.hitGround();
    this.hitPipe(list);
    this.display();
  }

  applyForce(force) {
    this.acc.add(force);
  }

  jump() {
    this.vel.add(0, -3);
  }

  passePipe(list) {
    for (var i = 0; i < list.length; i++) {
      return this.pos.x == list[i].pos.x + list[i].largeur;
    }
  }

  hitGround() {
    if (this.pos.y > height) {
      noLoop();
      select('#lose').html("Hit the ground !");
    }
  }

  hitPipe(list) {
    for (var i = 0; i < list.length; i++) {
      if (this.pos.x + this.r/2 > list[i].pos.x && this.pos.x - this.r/2 < list[i].pos.x + list[i].largeur) {
        if (!(this.pos.y - this.r/2 > list[i].hauteur && this.pos.y + this.r/2< list[i].hauteur + list[i].espace)) {
          list[i].c = 150;
          list[i].display();
          noLoop();
          select('#lose').html("Hit a pipe !");
        }
      }
    }
  }
}
