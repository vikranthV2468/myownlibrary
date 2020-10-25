var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 // movingRect = createSprite(400, 800,80,30);
  //movingRect.shapeColor = "green";
 // movingRect.debug = true;
  gameobj1 = createSprite(400, 800, 40, 20);
  gameobj1.shapeColor = "blue";
  gameobj1.debug = true;

  //movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameobj1.velocityY = -5;
}

function draw() {
  background(0,0,0); 
  bounceOff(gameobj1, fixedRect); 

  drawSprites();
}

