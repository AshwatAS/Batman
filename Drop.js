class Drop{
    constructor(x,y,width){
      var options={
          restitution:0,
          density:1
      }  
      this.body=Bodies.circle(x,y,width,options);
      this.width=width;
      World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>=420){
            this.body.position.y=-20;
        }
    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(0,0,this.width,this.width);
        pop();
    }
}