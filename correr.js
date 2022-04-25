var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
pista = loadImage("path.png");
menino_correndo = loadAnimation("jake1.png","jake2.png","jake3.png","jake4.png","jake5.png");
}

function setup(){
  
  createCanvas(400,400);
 path = createSprite(200,200,100,400)
 path.addImage("pathImg",pista);
path.velocityY = -3

path.scale=1.2;

boy = createSprite(200,50,15,30)
boy.addAnimation("boyImg",menino_correndo)
boy.scale=0.08;
  
//crie um limite à esquerda
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible=false;

//crie um limite à direita
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible=false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.x=mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  
  //código para redefinir o fundo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
