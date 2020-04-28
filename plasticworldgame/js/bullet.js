let renX,renY,zidanSpeed,radius;

class bullet{

  constructor(renX, renY, zidanSpeed){
    this.x = renX;
    this.y = renY;
    this.speed = zidanSpeed;
    this.radius = 20;
    this.bottle1Visible = false;
  }


  move(){
      this.y = this.y + this.speed;  // zidan wangshang fei

      // kill bullet when outside screen

      if (this.x < this.radius)
        this.bulletVisible = false;
      if (this.y < this.radius)
        this.bulletVisible = false;
      if (this.x > (windowWidth - this.radius))
        this.bulletVisible = false;
      if (this.y > (windowHeight - this.radius))
        this.bulletVisible = false;
  }


  display(){      // Display the bullet
      noStroke();
      fill(random(255),random(255),random(255));
      circle(this.x, this.y, this.radius);
    }


}
