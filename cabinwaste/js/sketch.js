
let grounds = [];
let groundsnumber = 4;
let currentGround;

//count score
let targetTimer = 0;
let allbottlenum=0;
let score=0;

//position of th human
let x=800;
let y;

//time f
let counter;
let t; //time count

let ziDanShu = 3;
var bullets = [];
var bottles = [];

let bottleNum=8; //bottle num
//let tempBottleNum=0;

let Retry;

let img_bottle, img_player, airplane, sky, cloud1, cloud2, cloud3;
let words = "- the world of plastics -";

let c1=100;d1=200;c2=750;d2=100;c3=600;d3=300;



function preload(){

  let ground1 = loadImage("data/dessert.png");
  let ground2 = loadImage("data/grass.png");
  let ground3 = loadImage("data/mountain.png");
  let ground4 = loadImage("data/beach.png");
  grounds = [ground1,ground2,ground3,ground4];
  currentGround = grounds[0];

  airplane = loadImage("data/airplane.png");
  sky = loadImage("data/sky.jpg");
  cloud1=loadImage("data/cloud1.png");
  cloud2=loadImage("data/cloud2.png");
  cloud3=loadImage("data/cloud3.png");

}




function setup() {
  //createCanvas(1800,1000);
  createCanvas(windowWidth,windowHeight);

  background(0);
  noCursor();

//bottle initial
  for(var i = 0; i < bottleNum; i++) {
    bottles[i] = new bottle();
  }

//bullet initial
  for(var j = 0; j < ziDanShu; j++) {
    bullets[j] = new bullet(x, y, -10);   //Display the bullets at the position where the character was when shooting, -10 is the speed.
  }

  img_bottle = loadImage("data/bottle.png");
  img_player = loadImage("data/player.png");

  Retry = createButton('RESTART THE WORLD');
	Retry.hide();
  // Retry = createButton('retry');
  // Retry.position(19, 19);
  // Retry.mousePressed(changeBG);

  }




function draw() {

  targetTimer += 1;

  //x=windowWidth/2;
  y=windowHeight*0.85;


  //----------------------------------------IMAGES & TEXT------------------------------------------------
  //sky
  imageMode(CORNER);
  image(sky,0,0,windowWidth,windowHeight);

  //let randomground = random(grounds)
  image(currentGround,0,0,windowWidth,windowHeight);

  //the word of plastics
  textAlign(CENTER);
  fill(255);
  textSize(21);
  textStyle(NORMAL);
  text(words, windowWidth/2, windowHeight*0.97);

  //human
  imageMode(CENTER);
  image(img_player,x,y,img_player.width/2,img_player.height/2);
  showshoot();

  //------------------------------------------BOTTLES------------------------------------------------
  //bottle fall gradually, not as a cluster
  t = millis() / 1000;
  if (t < bottleNum) {
    tempBottleNum = t;
  } else {
    tempBottleNum = bottleNum;
  }

  let hit = false;
  for(var i = 0; i < tempBottleNum; i++) {
    //count how many bottle falls
    if (bottles[i].bottleCount){
      allbottlenum+=1;
      bottles[i].bottleCount = false;
    }
    bottles[i].setPlace(mouseX, mouseY);   //the beginning falling place of bottles
    bottles[i].display();
    bottles[i].fall();

      //------------------------------DISAPPEAR WHEN COLLISION--------------------------------------
      //check if bullet and bottles hit, and both disappear
      for(var j = 0; j < ziDanShu; j++) {
        if (bullets[j].bulletVisible && bottles[i].bottle1Visible) {   //if both bullet and bottles are visible
           hit = bottles[i].checkContact(bullets[j].x, bullets[j].y);
           if (hit) {
             bottles[i].bottle1Visible = false;   //disappear
             bullets[j].bulletVisible = false;
             score+=1;
            print("hit !!!  bottles[i] = " + i + ", bullets[j] = " + j);
            print("score:"+score);
            //Bang.play();
           }
        }
      }
  }

  //------------------------------------------CLOUDS------------------------------------------------
  imageMode(CENTER);

  //cloud display
  image(cloud1,c1,d1,cloud1.width,cloud1.height);
  image(cloud2,c2,d2,cloud2.width,cloud2.height);
  image(cloud3,c3,d3,cloud3.width/2,cloud3.height/2);

  //cloud move
    if (c1>windowWidth) {
      c1=0;
    }else{
      c1=c1+0.3;
    }

    if (c2<0) {
      c2=1000;
    }else{
      c2=c2-0.1;
    }

    if (c3>windowWidth) {
      c3=0;
    }else{
      c3=c3+0.5;
    }


  image(airplane,mouseX,mouseY,airplane.width/2.1,airplane.height/2.1);

  //------------------------------------------END GAMES------------------------------------------------

 //if (targetTimer < 1000){
 if ((allbottlenum-score) < 150){   //the amount of missed bottle
    textAlign(LEFT);
    textFont('Helvetica');
    textSize(15);
    fill(235);
    textStyle(NORMAL);

    text("How to play:", 35, 35)
    text("LEFT & RIGHT KEY: move ", 35, 55);
    text("UP KEY: shoot the plastics", 35, 75);

    fill(22,123,251);
    textStyle(BOLD);
    text("BOTTLE AMOUNT: "+allbottlenum, 35, 125);

    textSize(25);
    text("SCORE: "+score, 35, 155);


  }else{
    gameOver();
  }

}

//----------------------------------------------------------------------------------------------------

function showshoot() {
    for (var i=0; i<ziDanShu; i++) {
      if (bullets[i].bulletVisible==true) {
        bullets[i].display();
        bullets[i].move();
      }
    }
  }



function keyReleased() {
  //move left and right
      if (keyCode === RIGHT_ARROW) {
        x=x+20;
      } else if (keyCode === LEFT_ARROW) {
        x=x-20;
  //shot
      } else if (keyCode === UP_ARROW) {

        // search if any of the 3 bullets is availble to shoot
        for (var i=0; i< ziDanShu; i++) {
          print("bottles[i] = " + i + ", visible = " + !bullets[i].bulletVisible);

          if (!bullets[i].bulletVisible) { //! means reverse, means: if bullet not visible
            // start new bullet
            bullets[i].bulletVisible = true;
            bullets[i].x = x;
            bullets[i].y = y-125;  //the starting place of the bullet12
            break; //stop the for loop
          }
        }
      }

      return false; // prevent default
}
