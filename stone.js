class Stone{
 constructor(x,y,width,height){
    var options={
     restitution:0.3,
     friction:5,
     density:1
     }
     this.body=Bodies.rectangle(x,y,width,height,options);
     this.width=width;
     this.height=height;
     World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,this.width,this.height);
        push();
        strokeWeight(4);
        stroke("yellow");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,80,80);
        pop();
    }
}