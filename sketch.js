
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground, dustbinp1, dustbinp2, dustbinp3, dustbinImg, dustbinSprite;

 function preload() {
	dustbinImg = loadImage("sprites/dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,690,50);

	dustbinSprite=createSprite(550, 570);
	dustbinSprite.addImage(dustbinImg);
	dustbinSprite.scale = 0.75;

	ground = new Ground(400,height,1200,20);

	dustbinp1 = new Dustbin(460,580,20,200);
	dustbinp2 = new Dustbin(640,580,20,200);
	dustbinp3 = new Dustbin(550,680,200,20);
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("grey");

  paper.display();

  ground.display();

  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:100,y:-117});
	   }
   }
   


