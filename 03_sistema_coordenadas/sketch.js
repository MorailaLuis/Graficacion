function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220)
  noFill();
  
  circle(width/4,height/4,100);
  circle(width/4,height*3/4,100);
  circle(width*3/4,height/4,100);
  circle(width*3/4,height*3/4,100);
  
  line(width/2,0,width/2,height);
  line(0,height/2,width,height/2);
  circle(0,0,100); 
  circle(width,0,100);
  circle(width,height,100);
  circle(0,height,100);
  line((width/2)-70,(height/2)-50,(width/2)+70,(height/2)-50);
  line((width/2)-70,(height/2)+50,(width/2)+70,(height/2)+50);
  line((width/2)-70,(height/2)-50,(width/2)-70,(height/2)+50);
  line((width/2)+70,(height/2)-50,(width/2)+70,(height/2)+50)
  fill("black");
  circle(width/2, height/2, 20);

  line(0,0,width,height);
  line(width,0,0,height);

}