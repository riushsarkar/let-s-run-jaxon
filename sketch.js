
var Runnerimg;
var runner;
var path;
var pathimg;
var invisible1,invisible2;
function preload(){
  pathimg=loadImage("path.png");
  Runnerimg=loadAnimation("Runner-1.png","Runner-2.png")

}


function setup(){
  createCanvas(400,400);
  background("white");

  //moving the path
  path = createSprite(200,200);
  path.addImage(pathimg);
  path.velocityY=5
  path.scale=1.2

  //creating the runner
  runner=createSprite(200,360,35,35)
  runner.addAnimation("moving man",Runnerimg)
  runner.scale=0.065  
// creating invisible boundaries
invisible1=createSprite(390,200,20,400)
invisible1.visible=false
invisible2=createSprite(15,200,30,400)
invisible2.visible=false
}

function draw() {
  background(0);

  if (path.y > 400) {
    path.y = height/2;
    } 
//moving the runner with mouse
    runner.x=mouseX
//colliding the player
    runner.collide(invisible1);
    runner.collide(invisible2);
drawSprites();
}
