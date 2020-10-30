var move,fix;



function setup() {
  createCanvas(800,400);
  move = createSprite(400, 200, 50, 100);
  move.shapeColor = "green";
  move.debug = true;

  fix = createSprite(400, 200, 100, 50);
  fix.shapeColor = "green";
  fix.debug = true;

}

function draw() {
  background(0);  


move.x = World.mouseX;
move.y = World.mouseY;

if(move.x - fix.x > fix.width/2 + move.width/2 
  || fix.x - move.x > fix.width/2 + move.width/2 
  || move.y - fix.y > fix.height/2 + move.height/2 
  || fix.y - move.y > fix.height/2 + move.height/2){

move.shapeColor = "red";
fix.shapeColor = "red";

}else{

move.shapeColor = "green"
fix.shapeColor = "green"


}









  drawSprites();
}