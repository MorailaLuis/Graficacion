let rotX = 0;
let rotY = 0;
let escala = 1;
let posX = 0;
let posZ = 0;

function setup() {
  createCanvas(800, 500, WEBGL);
}

function draw() {
  background(20, 15, 30);
  
  orbitControl(); 

  push();
    let hover = sin(frameCount * 0.02) * 50;
    translate(0, hover, 0);
    rotateY(frameCount * 0.01); 
    
    push();
      noFill();
      stroke(200, 255, 255);
      strokeWeight(2);
      rotateX(frameCount * 0.02);
      box(150 + sin(frameCount * 0.05) * 20); 
    pop();
    
    push();
      noStroke();
      fill(255, 50, 100);
      sphere(40);
    pop();
  pop();

  push();
    rotateY(frameCount * 0.02); 
    translate(300 + posX, 0, posZ); 
    
    rotateX(rotX);
    rotateY(rotY);
    scale(escala);
    
    rotateZ(PI);
    fill(100, 255, 150);
    stroke(0);
    cone(60, 150);
  pop();

  for (let i = 0; i < 5; i++) {
    push();
    let x = sin(i + frameCount * 0.01) * 400;
    let z = cos(i + frameCount * 0.01) * 400;
    translate(x, 100, z);
    fill(150, 100, 255);
    noStroke();
    cylinder(10, 300);
    translate(0, -150, 0);
    fill(255, 200, 50);
    sphere(25);
    pop();
  }

  push();
  translate(0, 300, 0);
  rotateX(HALF_PI);
  noFill();
  stroke(100, 100, 255, 150);
  plane(2000, 2000, 20, 20);
  pop();
}

function keyPressed() {
  let k = key.toUpperCase();
  switch(k){
    case 'A': posX -= 20; break;
    case 'D': posX += 20; break;
    case 'S': posZ -= 20; break;
    case 'W': posZ += 20; break;
    case 'Q': escala += 0.1; break;
    case 'E': escala -= 0.1; break;
  }
}