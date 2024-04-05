class Barquito {
    constructor(x, y , w, h, bpos){

        var Option = {
         restitution: 0.8, 
         friction: 1,
         density: 1,
        }

        this.body = Bodies.rectangle(x, y, w, h, Option);
        this.w = w;
        this.h  = h;
        this.image = loadImage("assets/boat.png");
        this.bposition =  bpos;
        World.add(world, this.body);
    }   
    
    display () {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, this.bposition, this.w, this.h);
    }
}

