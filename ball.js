class Ball{
    constructor(x,y,width,height){
        var options={
            restitution:0.3,
            friction:5,
            density:1
        }
        this.body=Bodies.circle(x,y,width,height);
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("yellow");
        ellipse(pos.x,pos.y,this.width,this.height);
        push();
        strokeWeight(4);
        stroke("blue");
        ellipseMode(CENTER);
        ellipse(this.body.position.x,this.body.position.y);
        pop();
    }
}