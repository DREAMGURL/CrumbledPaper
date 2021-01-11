
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dustbin, paper,ground;	
var world;


function setup() {
	createCanvas(1600, 700);
	

	engine = Engine.create();
	world = engine.world;
	dustbin=new Dustbin(1200,650);
	paper=new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	//Create a Ground
	

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  dustbin.display();
  paper.display();
  ground.display();
  
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
    
  	}
}





