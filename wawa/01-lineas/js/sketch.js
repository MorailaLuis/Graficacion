let centerPoint;
let angle = 0.05;
let orbitSpeed = 0.01;
let orbitRadius = 50;

function setup() {
  createCanvas(600, 400);
  centerPoint = width / 2;
}

function draw() {
  background("rgba(203, 212, 2, 1)"); //230, 239, 2
  stroke("rgba(224, 236, 0, 1)")
  fill("rgba(224, 236, 0, 1)")
  circle(width/2, height/2, 250);

  strokeWeight(10);
  stroke("white")
  //line(0,0,600,400); //primer punto en (0,0) segundo en (600,400)
  //line(0,height/2, innerWidth, height/2);

  orbitRadius += 50;
  let wx = centerPoint + orbitRadius * sin(angle);
  let wy = centerPoint + orbitRadius * cos(angle);

  line(wx+200,wy+60,300,200);
  line(wx+100,wy-60,300,200);
  
  angle = angle + orbitSpeed;

  

  line(width,(height/2)+60,300,200);
  line(width,(height/2)-60,300,200);

 
  strokeWeight(13);
  fill("black");
  circle(width/2, height/2, 170);

  stroke("black");
  fill("rgba(203, 212, 2, 1)");
  circle(width, height, 250);

  stroke("white");
  noFill();
  circle(width, height, 223);

  stroke("white");
  circle(width, height, 150);
  
}