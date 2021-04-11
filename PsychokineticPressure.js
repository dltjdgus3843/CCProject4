const max_objets = 1000;
let objets = [];

function Objet(x, y, vy, sz, c) {
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.sz = sz;
  this.c = c;
  
  this.move = function() {
    this.y += this.vy;
    if (this.y > windowHeight) this.vy = random(-5, 0);
    if (this.y < 0) this.vy = random(0, 10);
    if (mouseIsPressed) {
      let bgeffect1 = random(0, windowWidth);
      let bgeffect2 = random(0, mouseY-100);
      let bgeffect3 = random(mouseY, windowHeight);
      stroke(0, 10);
      strokeWeight(3);
      line(bgeffect1, 0, bgeffect1, bgeffect2);
      line(bgeffect1, bgeffect3+100, bgeffect1, windowHeight);
      
      for (i=0; i<max_objets; i++) {
        if (objets[i].y < mouseY-100) {
          objets[i].vy = 20;
        } else if (objets[i].y > mouseY+100) {
          objets[i].vy = -20;
        }
      }
    }
  }

  this.render = function() {
    stroke(100, 20);
    strokeWeight(1);
    fill(this.c, 80);
    rect(this.x, this.y, this.sz, this.sz);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<max_objets; i++) {
    objets[i] = new Objet(
      random(0, windowWidth), random(0, windowHeight-200),
      random(0, 5), random(10, 20), color(40, 210, 220, random(1, 50)));
  }
}

function draw() {
  background(random(155, 255), random(155, 255), random(155, 255), 80);
  for (let i=0; i<max_objets; i++) {
    objets[i].move();
    objets[i].render();
  }
}