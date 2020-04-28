let bottleImg;
let airplaneX, airplaneY;

class bottle{

	constructor(){
		this.x = 0;
		this.y = 0;
		this.speed = random(0, 1);
		this.onlyOne = true;
		this.bottle1Visible = true;
		this.bottleCount = true;
	}

	setPlace(airplaneX, airplaneY) {

		if (this.onlyOne) {
			this.x = random(airplaneX-100, airplaneX+100);
		  this.y = airplaneY + 50;
			this.onlyOne = false;
		}

		if (this.y > height) {
			this.x = random(airplaneX-100, airplaneX+100);
		  this.y = airplaneY + 50;
			this.speed = random(0, 1);
			this.bottle1Visible = true;
			this.bottleCount = true;
		}

	}

	//this.speed = random(5, 10);
 //     this.gravity = 1.05;
 //     this.y = this.y + this.speed*this.gravity;
 //
 //     if (this.y > height) {
 //       this.y = random(0, -height);
 //       this.gravity = 0;

	fall() {
    this.y = this.y + this.speed;
		this.speed = this.speed + 0.1;

	}


	display() {

		 if (this.bottle1Visible) {
			 push();
			 translate(this.x, this.y);
			 imageMode(CENTER);
			 image(img_bottle,0,0,img_bottle.width/3,img_bottle.height/3);
			 pop();
		 }
	 }




 checkContact (bulletX, bulletY) {
    return dist (this.x,this.y, bulletX, bulletY) < 30;   //is dist<30, boolean=true
  }

	bottleX() {
			return this.x;
	}

	bottleY() {
		return this.y;
	}
}
