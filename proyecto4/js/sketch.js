let angle = 0;
let nubes = [];

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  for (let i = 0; i < 10; i++) {
    nubes.push(createVector(random(-500, 500), random(-300, -100), random(-500, 500)));
  }
  noStroke();
}

function draw() {
  let bgRed = map(mouseX, 0, width, 10, 40);
  background(bgRed, 15, 45);
  orbitControl(); 
  ambientLight("#baeba5"); 
  
  if (keyIsPressed) {
    directionalLight(0, 255, 150, 0, 1, -1);
  } else {
    directionalLight(255, 100, 200, 0, 1, -1);
  }

  angle += 0.015;
  
  for (let x = -400; x <= 400; x += 400) {
    for (let z = -400; z <= 400; z += 400) {
      push();
      translate(x, 100, z);
      
      push();
      specularMaterial(255, 255, 100);
      let h = 200 + sin(angle + x) * 50; 
      cylinder(20, h);
      pop();

      push();
      translate(0, -150, 0);
      rotateY(angle*2);
      rotateX(3.1);
      normalMaterial();
      shininess(50);
      cone(60, 200,5);
      pop();

      push();
      translate(0, -150, 0);
      rotateY(-angle * 3);
      translate(100, 0, 0);
      ambientMaterial(50, 200, 255);
      cone(15, 30);
      pop();
      
      pop();
    }
  }


  push();
  fill(255, 255, 255, 150);
  for (let p of nubes) {
    push();
    translate(p.x + sin(angle) * 20, p.y, p.z);
    sphere(30);
    pop();
  }
  pop();
}