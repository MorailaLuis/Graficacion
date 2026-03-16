function setup() { 
createCanvas(600, 300); 
rectMode(CENTER); 
} 
function draw() { 
background(240); 
let s = map(mouseX, 0, width, 0.2, 2); 
push(); 
translate(width/2, height/2); 
scale(s); 
rect(0, 0, 120, 60); 
pop(); 
} 