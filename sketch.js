
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rubber,hammer,stone1,stone2,rubber2,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground= new Ground(600,height,1200,20);

  hammer= new Hammer(600,100,70,30);
  stone1= new Stone(200,380,80,80);
  stone2= new Stone(1100,380,80,80);
	rubber= new Ball(700,300,30);
  rubber2= new Ball(800,300,30);
    
}


function draw() {

  background(0);

  Engine.update(engine);
  
  ground.display();
  hammer.display();
  stone1.display();
  rubber.display();
 stone2.display();
  rubber2.display();

}