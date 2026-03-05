let sx=1;
let sy = 1;
function setup() {
  createCanvas(600, 300);
  rectMode(CENTER);
}

function draw() {
  background(240);
  sx = 1 + 0.5 * sin(framecount* 0.05);
}