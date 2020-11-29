class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.radius = r;
    }

    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        fill("pink");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}