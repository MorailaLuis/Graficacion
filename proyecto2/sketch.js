let posicion;      
let escala = 1.0;  
let anguloLuz = 0; 
let shearVal = 0;  
let puntosCurva = [];
let profundidadFractal = 5; 

function setup() {
  createCanvas(800, 600);
  posicion = createVector(width / 2, height / 2);
  

  for (let i = -1; i <= 8; i++) {
    puntosCurva.push({ x: i * (width / 6), y: height - 120 });
  }
}

function draw() {
  background(5, 5, 15); 
  
  interaccion();
  
  randomSeed(99);
  stroke(25, 100, 40);
  dibujarFractal(0, 0, width, height, 5);

  dibujarCurva();
  
  push();
  aplicarTransformaciones();
  dibujarObjeto();
  pop();

  dibujarTexto();
}

function aplicarTransformaciones() {
  translate(posicion.x, posicion.y);
  scale(escala);
  shearX(shearVal);
}

function dibujarObjeto() {
  rectMode(CENTER);
  
  noStroke();
  fill(240,50);
  rect(0, 20, 40, 160); 
  fill(150, 0, 0);
  rect(0, -60, 55, 10); 
  rect(0, -100, 55, 10); 

  push();
  translate(0, -80); 
  rotate(anguloLuz); 
  
  fill(255, 255, 180, 80);
  triangle(0, 0, 500, -100, 500, 100);
  triangle(0, 0, -500, -100, -500, 100);
  pop();
  
  fill(255, 255, 220);
  circle(0, -80, 30);
}

function dibujarCurva() {
  strokeWeight(3);
  stroke(0, 150, 255, 200);
  noFill();
  
  beginShape();
  for (let i = 0; i < puntosCurva.length; i++) {
    let osc = sin(frameCount * 0.03 + i) * 20;
    curveVertex(puntosCurva[i].x, puntosCurva[i].y + osc);
  }
  endShape();
  
  stroke("#CC5500");
  for (let p of puntosCurva) {
    circle(p.x, p.y + sin(frameCount * 0.03) * 10, 4);
  }
}

function dibujarFractal(x, y, w, h, nivel) {
  if (nivel === 0) return;

  let cx = x + random(w * 0.3, w * 0.7);
  let cy = y + random(h * 0.3, h * 0.7);
  line(x, cy, x + w, cy);
  line(cx, y, cx, y + h);

  dibujarFractal(x, y, cx - x, cy - y, nivel - 1);
  dibujarFractal(cx, y, x + w - cx, cy - y, nivel - 1);
}

function dibujarTexto() {
  textFont('Comic Sans MS');
  fill(255);
  noStroke();
  
  textSize(24);
  text("Moraila Ramirez Luis Francisco", 40, 50);
  
  textSize(14);
  fill(100, 200, 255);
  text("PRoyecto 2", 40, 75);
}

function interaccion() {
  posicion.x = mouseX;
  posicion.y = mouseY;
  
  anguloLuz = map(mouseX, 0, width, 0, TWO_PI);
  
  shearVal = map(mouseY, 0, height, -0.1, 0.1);
}

function mouseWheel(event) {
  escala += event.delta * -0.001;
  escala = constrain(escala, 0.2, 4.0);
  return false;
}