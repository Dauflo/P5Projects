class Pipe {
  constructor() {
    this.pos = createVector(width, 0);
    this.largeur = 20;
    this.hauteur = random(50, height - 100);
    this.espace = 60;
    this.c = 200;
  }

  display() {
    fill(this.c);
    noStroke();
    rect(this.pos.x, this.pos.y, this.largeur, this.hauteur);
    rect(this.pos.x, this.hauteur + this.espace, this.largeur, height - this.hauteur);
  }

  update() {
    this.pos.x -= 1;
  }

  gestion() {
    this.update();
    this.display();
  }

  out() {
    return this.pos.x < -this.largeur;
  }

  middle() {
    return this.pos.x == width/2;
  }
}
