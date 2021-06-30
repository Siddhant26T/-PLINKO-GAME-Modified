class Particle
{
    constructor(x,y)
    {
        var option={
           
            'restitution' : 0.4

        }
        
        this.y=y;
        this.x=x;
        this.r = 10;
        this.body=Bodies.circle(this.x,this.y,this.r,option);
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position; 
        var angle = this.body.angle; push(); 
        translate(pos.x, pos.y); rotate(angle); 
        noStroke(); 
        fill(this.color); 
        ellipseMode(RADIUS); 
        ellipse(0, 0, this.r,this.r); 
        pop();     
    }

}