
var trex ,trex_running, ground;
function preload(){
  //Loading the images
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,160,20,50);
 //Create a ground sprite
ground = createSprite(200,180,400,20);

//Adding the t-rex animation
trex.addAnimation("running",trex_running);

//Making the trex smaller with the scale
trex.scale=0.5;
//Changing the x value
trex.x=50;

}

function draw(){
  background("white");

  //Giving the function to make the trex jump using the space bar.
if (keyDown("space")){
  trex.velocityY=-10;

}
//Adding gravity (formula)
trex.velocityY=trex.velocityY+0.5;
//Stopping the trex from falling down.
trex.collide(ground)
//Command to display an object
  drawSprites();

}
