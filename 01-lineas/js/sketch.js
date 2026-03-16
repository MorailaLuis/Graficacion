let colorAlt = false;
let bgColor = 0
let otherColor = 0
let tinyColor  = 0;

let angle = 90;
let angle2 = 250;
let angle3 = 150;

let triWidth = 250;
let triHeight = 400;

let num = 15;

let x = [];
let y = [];
let speed = [];
let size = [];
let shape= [];


function setup() {
  angleMode(DEGREES);

  createCanvas(600, 400);
  otherColor = "rgba(224, 236, 0, 1)"
  bgColor = "rgba(203, 212, 2, 1)";
  tinyColor = "rgba(241, 255, 76, 1)"

  
  for (let i = 0; i < num; i++) {
    x[i] = random(width);
    y[i] = random(height);
    speed[i] = random(0.5, 3);
    size[i] = random(10, 45);
    shape[i]  = floor(random(4));
  }

}

function draw() {
  
  background(bgColor); //230, 239, 2
  stroke(otherColor)
  fill(otherColor)
  circle(width/2, height/2, 250);

  strokeWeight(9);
  stroke(tinyColor);
  noFill();
  for (let i = 0; i < num; i++) {

    y[i] -= speed[i];

    if (y[i] < -50) {
      y[i] = height + 50;
      x[i] = random(width); 
      speed[i] = random(1, 3); 
    }
    
    if (shape[i] === 0) {
      circle(x[i], y[i], size[i]);
    } 
    else if (shape[i] === 1) {
      square(x[i], y[i], size[i],10); 
    } 
    else {
      push();
      translate(x[i], y[i]);
      rotate(45);
      rect(0, 0, size[i], size[i]);
      pop();
    }
    
  }

  strokeWeight(10);
  stroke("white");
  fill("black");

  push();
    translate(300,200);
    rotate(angle3);
    strokeWeight(12);
    noFill();
    stroke("black")
    arc(0, 0, 330, 330, 90, 310);
    line(-9,165,-9,500);
    stroke("white")
    arc(0, 0, 310, 310, 90, 310);
    line(0,155,0,500);
  pop();

  angle3 += 0.13

  push();  // triangulos
    translate(300, 200);
    rotate(angle);
    triangle(0, 0, -triWidth / 2, triHeight, triWidth / 2, triHeight);
  pop();

  push();  
    noFill();
    translate(300, 200);
    rotate(angle2);
    triangle(0, 0, (-triWidth+70) / 2, triHeight, (triWidth+70) / 2, triHeight);
    fill("black");
    triangle(0, 0, (-triWidth + 70) / 3,(triHeight * 2) / 3,(triWidth + 70) / 3,(triHeight * 2) / 3);
  pop();

  angle += 0.2;
  angle2 += 0.25;
 
  strokeWeight(13); // circulos

  if(colorAlt){
    stroke("white");
    circle(width/2, height/2, 145);
    stroke(bgColor);
    fill("white");
    circle(width/2, height/2, 120);
  }
  else{
    stroke("white");
    fill("black");
    circle(width/2, height/2, 170);
  }
  
  

  push(); // corner circle
    translate(width+30,height);
    stroke("black");
    noFill();
    circle(0, 0, 270);
    stroke("white");
    circle(0, 0, 244);
    stroke("white");
    circle(0, 0, 150);
  pop();
  
  strokeWeight(5);
  if(colorAlt){
    push();
      stroke("black");
      translate(300,200);
      circle(20,-13,20);
      line(12,-7,-20,21);
      line(-17,19,-10,28)
      line(-15,17,-8,26)
      
      line(-3,5,4,14)
    pop();
  }else{
    push();
      translate(300,200);
      line(-10,-30,-10,30);
      line(-2,-30,-2,-9);
      line(-10,-30,-2,-30);
      line(-10,30,20,-8);
      line(20,-8,-10,-8);
    pop();
  }

}

function mousePressed() {
	if(colorAlt){
    bgColor = "rgba(203, 212, 2, 1)";
    otherColor = "rgba(224, 236, 0, 1)"
    tinyColor = "rgba(241, 255, 76, 1)"
    colorAlt = false;
  }
  else{
    bgColor = "rgba(169, 67, 243, 1)";
    otherColor = "rgba(187, 98, 251, 1)"
    tinyColor = "rgba(204, 140, 250, 1)"
    colorAlt=true;
  }
}