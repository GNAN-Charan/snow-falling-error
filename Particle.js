class Particle {
    constructor(x, y ,r) {

        var options ={
            restitution:0.4
        }
        this.image = loadImage("snow5.webp")
        this.Visibility = 255
        this.r=r;
        this.body = Bodies.circle(x, y, this.r,options);
        World.add(world, this.body);

    }
    display() 
{

    if(this.body.speed > 3)
    {
    World.remove(world, this.body);
    push();
    this.Visiblity = this.Visiblity - 5;
    tint(255,this.Visiblity);
    image(this.image, this.body.position.x, this.body.position.y, 50, 50);
    pop();
    }
}
}