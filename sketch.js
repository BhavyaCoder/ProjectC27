
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint


function preload()
{

}

function setup() {
	createCanvas(1000,1000);


	engine = Engine.create();
	world = engine.world;

bobObject1= new bob(420.5,900,80)

//line1 = new rope(bobObject1.body,roofObject.body,-bobDiameter*2,0)

roof=new Ground(500,500,600,30)
bobObject2 = new bob(500,900,80)
bobObject3 = new bob(340,900,80)
bobObject4 = new bob(580,900,80)
bobObject5 = new bob(660,900,80)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();
roof.display();
  

 
}



