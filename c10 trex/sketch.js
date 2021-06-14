var trex, trex_running, edges;
var groundImage;
var ground;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50;

  //create te ground sprite
  ground = createSprite(200,180,400,20)
  ground.addImage("gr",groundImage)
}


function draw(){
  //set background color 
  background("white");

  //make the ground move backwards
  ground.velocityX = -2; 
  console.log(ground.x)

  //create an infinite ground
  if(ground.x<0){
    ground.x = ground.width/2
  }
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space") && trex.y > 140){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(ground)
  drawSprites();
}