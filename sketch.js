
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var dustbin1,dustbin2,dustbin3,dustbinImg,dustbinSprite;

var paper1;

function preload(){
	dustbinImg = loadImage("dustbinImage.png");
}

function setup() {
	createCanvas(1200, 500);

	dustbinSprite = createSprite(1000,height-210,240,280)
	dustbinSprite.addImage(dustbinImg)
	dustbinSprite.scale = 1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin(1000,height- 55,200,20); 
	dustbin2 = new Dustbin(890,height- 175,20,280);
	dustbin3 = new Dustbin(1110,height- 175,20,280);

	paper1 = new Paper(200,height-55,70);

	ground = new Ground(width/2,height-35,width,20);
	Engine.run(engine);

	
}


function draw() {
	background(150);
	Engine.update(engine);

	paper1.display();
	
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();

	ground.display();

	keyPressed();
	drawSprites();
 
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(paper1.body,paper1.body.position,{x:600,y:-475})
	} 
	if(keyWentUp(UP_ARROW)){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:0,y:0})
	}
}



