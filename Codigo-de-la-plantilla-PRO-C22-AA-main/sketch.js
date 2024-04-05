const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, backgroundImg;
var canvas, angle, tower, ground, cannon, bote;

var balls = [];

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
  
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  

  var options = {
    isStatic: true
  }

  angleMode(DEGREES);
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground)

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);
  
  angle = 20;
  cannon = new Cannon(180, 110, 130, 100, angle); 

  bote = new Barquito(150,200, 160, 160,-90);
/*
  var array=[19, 'Tu mama', 20];
  console.log(array);

  var list={
    name:'Santi',
    apellido:'mala suerte',
    no_lista:12,
    marks:[10,10,5,9,4]
  }
  console.log(list);
  console.log(array[1]);
  console.log(list.apellido);*/
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine); //actualiza el motor fisico de nuestro programa
  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push(); //captura una nueva info
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  //La devuelve a la configuración anterior
  
  

 for(var i=0; i < balls.length; i++) {
  cannonBall2(balls[i],i);
 }

 cannon.display();
 bote.display();
}

function keyPressed() {
  if(keyCode ===32) {
   var cannonBall = new CannonBall(cannon.x, cannon.y);
   cannonBall.trayectory = [];
   //Matter.Body.setAngle(cannonBall.body,cannon.angle);
   balls.push(cannonBall);
   
  }
}
 
function keyReleased ( ) { //determinar  cuando se suelta un botón del teclado
  if (keyCode === 32) {//32=space
    balls[balls.length-1].shoot();//llama al método shoot de cannone
  }
}

function cannonBall2(ball) {
  if (ball) {
    ball.display()
  }
}


