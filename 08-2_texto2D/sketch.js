function setup() {
  createCanvas(600, 400);
}

function draw(){
background(240);
let s = 1 + 0.5*sin(frameCount*0.05);
push();
translate(width/2,height/2);
scale(s);
textAlign(CENTER,CENTER);
textSize(40);
text("Escalando",0,0);
pop();
}