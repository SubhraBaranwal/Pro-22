var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 400);

var ball_options={
	isStatic:false,
	restitution:0.3,
    friction:0,
	density:1.2

}
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ball= Bodies.circle(100,200,20,ball_options)
World.add(world,ball);
fill("red")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



