class Drop{
    constructor(x,y,width){
      var options={
          restitution:0,
          density:1
      }  
      this.body=Bodies.circle(x,y,width,options);
      World.add(world,this.body);
      this.width=width;
      this.y=y;
      this.x=x;
    }
    velocity(){
        this.y=this.y+4;
        if(this.y>800){
            this.y=Math.round(random(-550,-50))
            this.x=Math.round(random(20,1180))
        }
    }
    display(){
        var pos=this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.x,this.y,this.width,this.width);
    }
}