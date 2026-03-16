let pts = []; 
function setup(){ 
createCanvas(600,400); 
pts = [ 
createVector(50,200), 
createVector(150,100), 
createVector(300,300), 
createVector(450,150), 
createVector(550,250) 
]; 
} 
function draw(){ 
background(245); 
noFill(); 
strokeWeight(3); 
for(let i=0; i<pts.length-3; i++){ 
curve( 
pts[i].x,pts[i].y, 
pts[i+1].x,pts[i+1].y, 
pts[i+2].x,pts[i+2].y, 
pts[i+3].x,pts[i+3].y 
); 
} 
} 