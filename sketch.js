var fixedRect,movingRect;
var object1,object2,object3,object4;

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(100, 200, 50, 80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  fixedRect.velocityY=3;
  fixedRect.velocityX=2;
  movingRect=createSprite(600,300,80,50);
  movingRect.shapeColor="red";
  movingRect.debug=true;
  movingRect.velocityX=-2;
  movingRect.velocityY=2;
  object1=createSprite(300,150,80,50);
  object1.shapeColor="green";
  object1.debug=true;

  object2=createSprite(400,150,80,50);
  object2.shapeColor="green";
  object2.debug=true;
  
  object3=createSprite(500,150,80,50);
  object3.shapeColor="green";
  object3.debug=true;

  object4=createSprite(600,150,80,50);
  object4.shapeColor="green";
  object4.debug=true;
}

function draw() {
  background(255,255,255); 
 bounceoff(movingRect,fixedRect);
  
  drawSprites();

}
function bounceoff(object1,object2)
{
if(object1.x-object2.x<object2.width/2+object1.width/2
  && object2.x-object1.x<object2.width/2+object1.width/2)
  {
    object1.velocityX=object1.velocityX*(-1);
    object2.velocityX=object2.velocityX*(-1);
  }
 if( object2.y-object1.y<object2.height/2+object1.height/2
  && object1.y-object2.y<object2.height/2+object1.height/2)
{
  object1.velocityY=object1.velocityY*(-1);
  object2.velocityY=object2.velocityY*(-1);
}

}