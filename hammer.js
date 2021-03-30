class Hammer{
    constructor(x,y,width,height){
        var options={
           "density":2,
           "friction":1.0,
           "restitution":0.5
        }  
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        World.add(world,this.body)
    }
    display(){

        var pos=this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x,pos.y,this.width,this.height)
        push();
        strokeWeight(4);
        stroke("yellow");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,70,30);
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
        pop();
    }
};