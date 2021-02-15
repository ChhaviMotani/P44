
var ground,groundImage;
var mario,marioImage;
var IVground,IVgroundImage;
var enemy,enemyImage;

var PLAY = 1
var END = 0
var gameState = PLAY

var bg;
var pipe,pipeImage;


function preload() {
bg = loadImage("bg.png")
groundImage = loadImage("ground.png")
marioImage = loadAnimation("mario1.png","mario2.png")
enemyImage = loadAnimation("enemy1.png","enemy2.png")
pipeImage = loadImage("pipes.png")

}
function setup() {
createCanvas(1200, 400);
ground = createSprite(600,390,1200,20)
ground.addImage("ground",groundImage)

mario = createSprite(50,330,20,20)
mario.addAnimation("mario",marioImage)
mario.scale = 0.3

IVground = createSprite(600,370,1200,10)
IVground.visible = false


}
function draw() {
  background("pink");
 ground.velocityX = -8  
  if(ground.x<0){
    ground.x = ground.width/2
  }

  if(keyDown("space")&& mario.y>320){
    mario.velocityY = -20

  }

  mario.velocityY = mario.velocityY +0.8
  mario.collide(IVground)
  spawnPipes();

  drawSprites();
}


function spawnPipes() {
  //write code here to spawn the clouds
  if (frameCount % 200 === 0) {
    var pipe = createSprite(1200,310,40,10);
    pipe.addImage(pipeImage);
    pipe.scale = 0.5;
    pipe.velocityX = -6;

  }
}

