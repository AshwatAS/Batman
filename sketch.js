const Bodies=Matter.Bodies;
const World=Matter.World;
const Engine=Matter.Engine;
var engine,world,canvas;
var maxDrops=100;
var drops=[];
function preload(){
    umbrellaIMG=loadImage("img.jpg");  
}

function setup(){
   canvas=createCanvas(1200,800);
   engine=Engine.create();
   world=engine.world;
   umbrella=new Umbrella(200,300,100);
}

function draw(){
   background(0);
   Engine.update(engine);
   umbrella.display();
   //console.log(frameCount);
   if(frameCount%100==0){
    for(var i=0;i<maxDrops;i++){
        drops.push(new Drop(Math.round(random(0,1100)),Math.round(random(0,-400)),10));
    }
   } 
   for(var i=0;i<maxDrops;i++){
    drops[i].update();
    drops[i].display();
   }
   drawSprites(); 
}   

