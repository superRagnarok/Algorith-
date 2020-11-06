var A1,A2;
function setup() {
  createCanvas(800,400);
  A1 = createSprite(400,200,100,50);
  A1.shapeColor="magenta";
  A1.velocityY=-1;
  A2 = createSprite(400,100,50,50);
  A2.shapeColor="cyan";
  A2.velocityY=1;
}

function draw() {
  background(0);
  /*A2.x=mouseX;
  A2.y=mouseY;*/
  if (A1.x-A2.x<A1.width/2+A2.width/2 &&
      A2.x-A1.x<A1.width/2+A2.width/2 &&
      A1.y-A2.y<A1.height/2+A2.height/2 &&
      A2.y-A1.y<A1.height/2+A2.height/2){
         
        A1.shapeColor="orange";
        A2.shapeColor="blue";

      } 
      else {
        A1.shapeColor="magenta";
        A2.shapeColor="cyan";
      }

      if (A1.x-A2.x<A1.width/2+A2.width/2 &&
        A2.x-A1.x<A1.width/2+A2.width/2){
      A1.velocityX=A1.velocityX*(-1);
      A2.velocityX=A2.velocityX*(-1);
        }
      if (A1.y-A2.y<A1.height/2+A2.height/2 &&
        A2.y-A1.y<A1.height/2+A2.height/2){
          A1.velocityY=A1.velocityY*(-1);
          A2.velocityY=A2.velocityY*(-1);

        }  
  drawSprites();
}