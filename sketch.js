const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
var engine,world,canvas;
//var maxDrops=100;
var drops=[];
function preload(){
   umbrellaIMG=loadImage("img.jpg"); 
   lightIMG=loadImage("light.jpg");
}

function setup(){
   canvas=createCanvas(1200,800);
   engine=Engine.create();
   world=engine.world;
   rand=Math.round(random(20,380));
   rand2=Math.round(random(-550,-50));
    for (i=0;i<=30;i++){
        drops[i]=new Drop(rand,rand2,4);
   }
   umbrella=new Umbrella(200,400,300,400);
}

function draw(){
   background(0);
   Engine.update(engine);
   //console.log(frameCount);
   for (i=1;i<=30;i++){
    drops[i].velocity()
    drops[i].display()
  }
  rand3=Math.round(random(50,750));
  if(frameCount%80==0){
   image(lightIMG,rand3,10);
  }
  umbrella.display();
   drawSprites(); 
}   

