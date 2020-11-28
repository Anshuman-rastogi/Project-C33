var Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles;
var plinkos = [];
var divisions = [];

var divisionHeight=300;

var score =0;
var turn = 0;

var gameState = "start";

var edge1, edge2;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20, "white");
 
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
      plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }    

    edge1 = new Ground(802,250,5,500,color(211, 35, 35));
    edge2 = new Ground(1,250,5,500,color(211, 35, 35));
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("100", 340, 520);
  text("200", 665, 520);
  text("250", 500, 520);
  text("300", 100, 520);
  text("350", 265, 520);
  text("400", 745, 520);
  text("450", 185, 520);
  text("500", 420, 520);
  text("550", 25, 520);
  text("600", 585, 520);
  
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

   

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   edge1.display();

   /*
   var text1 = createElement('h2');
   text1.html("Hint: Press LEFT mouse button to display the particle");
   text1.position(200,50); */ 

   scoring();

   if(gameState === "end"){
    textSize(90); 
    text("Game Over", 205,255);     
   }
}

function mousePressed(){

  console.log(gameState);
  if(gameState !== "end"){
    turn++;
    particles = new Particle(mouseX, 10, 10, 10);
    console.log(particles);
  }

}