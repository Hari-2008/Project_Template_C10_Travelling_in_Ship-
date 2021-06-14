var seaImg;
var sea;

var shipImg;
var ship;
function preload(){
  shipImg = loadAnimation("ship-3.png","ship-4.png");
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,400);
  sea.addImage("s",seaImg);
  
  ship = createSprite(100,300);
  ship.addAnimation("h",shipImg);
  


}

function draw() {
  background("blue");
 
 sea.velocityX = -2;
 console.log(sea.X);
 sea.scale = 2;
 sea.y = 10;

 ship.scale = 0.2;
 ship.x = 100;

 if(sea.x<0){
  sea.x = sea.width/2
}


drawSprites();
}