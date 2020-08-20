class Particle{
    constructor(x,y,r){
        var options={
            isStatic:true,
            }
            this.x=x;
            this.y=y
            this.r=10
            this.body=Bodies.circle(x,y,r,options)
         World.add(world,this.body)
    }
    display(){
    var pos=this.body.position
    push()
                translate(pos.x, pos.y);
                rectMode(CENTER)
                strokeWeight(3);
                fill("orange")
                ellipse(0,0,this.r);
                pop()
    }
    }
    