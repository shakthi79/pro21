var bullet, wall;
var speed, weight, thickness;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,5)
  wall= createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

}

function draw() {
  background(255,255,255);  
  if(HasCollided(bullet, wall)){
    bullet.velocityX = 0
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)
    if(damage>10)
    wall.shapeColor = "red"
    else
    wall.shapeColor = "green"
    }
  
  drawSprites();
   }
function HasCollided (b,w){
  if(b.x-w.x>=b.width){
    return true
  }
  else
  return false
}