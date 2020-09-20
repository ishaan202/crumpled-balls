
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin,ground;
var dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	paper = new Paper(200,100,50);

	ground=new Ground(width/2 ,670 ,width ,20)
	ground.shapeColor=color(255)

	dustbin=createSprite(799,650,200,20);
	dustbin.shapeColor="red";

	dustbin2=createSprite(890,610,20,100);
	dustbin2.shapeColor="red";

	dustbin3=createSprite(700,610,20,100);
	dustbin3.shapeColor="red";

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  
paper.display();
ground.display();
dustbin2.display();
dustbin.display();
dustbin3.display();
drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90});
	}
}

