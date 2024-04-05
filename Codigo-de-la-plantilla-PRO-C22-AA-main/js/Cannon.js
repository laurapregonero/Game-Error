class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width; //this.w=width
    this.height = height;
    this.angle = angle;
    this.cannon_image = loadImage("./assets/canon.png");
    this.base_image = loadImage('./assets/cannonBase.png');
  }
  
  display() { 
    console.log(this.angle);
    if (keyIsDown(RIGHT_ARROW) && (this.angle < 60)){
      this.angle += 1;
      console.log('right arrow is pressed');
     }
     if (keyIsDown(LEFT_ARROW) && (this.angle > -30)){
      this.angle -= 1;
      console.log('left arrow is pressed');
     }
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    //rect( 0,0, this.width, this.height);
    image(this.cannon_image,0,0, this.width, this.height);
    pop();
    image( this.base_image,70,20, 200, 200);
    //rect( 70, 20, 200, 200);
    //noFill();//manera para que me pueda basar el cannon en la pantalla sin color
  }
}

//es una plantilla con previas caracteristicas que me permite personalizar en el sketch. 