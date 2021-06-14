var trex;

//create animation step 1
var trex_running;

//step 2 -
function preload(){
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
    createCanvas(600,200);

    //create the trex
    trex = createSprite(50,160,20,50);
    
    //step 3
    trex.addAnimation("running",trex_running);
    trex.scale = 0.5;

    //createEdges
    //Edge is an array of sprites; we have 4 edges on the canvas and 
    //createEdgeSprites() will create the 4 edge sprites
    //edges[0] leftedge, 1 is right, 2 is top, 3 is bottom
    edges = createEdgeSprites();

}

function draw(){
    background("white");

    if(keyDown("space")){
        trex.velocityY = -10;
    }
    
    //add gravity
    trex.velocityY = trex.velocityY + 0.5;

    //so that trex does not go down or outside bottom edge
    trex.collide(edges[3])
    
    drawSprites();
}