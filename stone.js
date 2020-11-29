class Stone{
    constructor(x,y,r){
        var options={
            isStatic:true
            restitution:0,
            friction:1,
            density:1.2
        }
        this.width = r*2;
        this.stone = Bodies.circle(x,y,r,options);

        World.add(world,this.stone);
    }

    display(){
        var pos = this.stone.position
        ellipseMode(CENTER);
        fill("pink");
        ellipse(pos.x, pos.y, this.width, this.width);
    }
}