class Umbrella{
    constructor(x,y,width,height){
        var options={
            "restitution":0,
            "density":1,
            "isStatic":true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        //rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
        image(umbrellaIMG,this.body.position.x,this.body.position.y);
    }
}