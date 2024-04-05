
class CannonBall {
    constructor(x,y) {
        var options={
            isStatic:true, 

        }
    
    this.x = x;
    this.y = y;
    this.r= 30;
    this.body = Bodies.circle(x, y, this.r, options);
    this.image = loadImage("../assets/cannonball.png");
    this.trayectory = [];
    World.add(world,this.body);//mundo,objeto
    }
    
    shoot(){
       var newAngle = cannon.angle -30;
       newAngle = newAngle * (Math.PI/180);
       var velocity = p5.Vector.fromAngle(newAngle);
       velocity.mult(0.4);
       Matter.Body.setStatic(this.body, false);
       Matter.Body.setVelocity(this.body, {
        x: velocity.x * (180/Math.PI),y:velocity.y * (180/Math.PI) 
       })
    };

    display() {
        var angle = this.body.angle;
        var pos = this.body.position; //var particulares; resumir informacion solo se ejecuta en el display
        push();//mete datos 
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.r, this.r)
        pop();//para los datos ingresados

        //Trayectoria
        if(this.body.velocity.x > 0 && pos.x > 10) {
            var position = [pos.x, pos.y];//guardar componentes
            this.trayectory.push(position);
        }
        for(var i = 0; i < this.trayectory.length; i++){
            image(this.image,this.trayectory[i][0],this.trayectory[i][1],2 , 2 );
        }
    } 


}   
   