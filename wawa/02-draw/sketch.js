let x=0;
let speed=3;

let centerPoint;
let angle = 0.05;
let orbitSpeed = 0.05;
let orbitRadius = 50;
let ellipseRadius = 60;

function setup() {
  createCanvas(500, 500);
  centerPoint = width / 2;
}

function draw() {
  background(100); //230, 239, 2
  frameRate(30);
  circle(width/2,x,40);
  x+=speed;

  if (x > height || x < 0){
    speed = -speed
  }
  
  orbitRadius = 50;
  let wx = centerPoint + orbitRadius * sin(angle);
  let wy = centerPoint + orbitRadius * cos(angle);
  stroke(30);
  ellipse(wx, wy, ellipseRadius);
  angle = angle + orbitSpeed;
  
}