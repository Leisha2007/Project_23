var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	packageSprite=createSprite(width/2, 80, 20);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageBody = Bodies.circle(width/2,80,20);
	World.add(world,packageBody);
	Matter.Body.setStatic(packageBody,true);

	helicopterSprite=createSprite(width/2, 80, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	ground = Bodies.rectangle(width/2,height-35,width,10,{isStatic:true});
	World.add(world,ground);

 	rect1=createSprite(width/2,height-50,175,20);
 	rect1.shapeColor="red";
	r1=Matter.Bodies.rectangle(width/2,height-50,175,20,{isStatic:true});
	World.add(world,r1);
	 
 	rect2=createSprite(300,610,20,100);
	rect2.shapeColor="red";
	r2=Matter.Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,r2);
	 
	rect3=createSprite(500,610,20,100);
	rect3.shapeColor="red";
	r3=Matter.Bodies.rectangle(500,610,20,100,{isStatic:true});
	World.add(world,r3);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  rect1.x= r1.position.x;
  rect1.y= r1.position.y;
  rect2.x= r2.position.x;
  rect2.y= r2.position.y;
  rect3.x= r3.position.x;
  rect3.y= r3.position.y;
  if(packageBody.position.y<=80){
	helicopterSprite.x=packageBody.position.x;
    helicopterSprite.y=packageBody.position.y;
  }
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode==DOWN_ARROW){
		Matter.Body.setStatic(packageBody,false);
		keyCode=0;
	}
	if(keyCode==LEFT_ARROW && packageBody.position.y<=80){
		Matter.Body.setPosition(packageBody,{x:packageBody.position.x-5,y:packageBody.position.y})
		keyCode=0;
	}
	if(keyCode==RIGHT_ARROW && packageBody.position.y<=80){
		Matter.Body.setPosition(packageBody,{x:packageBody.position.x+5,y:packageBody.position.y})
		keyCode=0;
	}
}
