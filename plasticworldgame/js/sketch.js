
let words = "- the world of plastics -";

let grounds = [];
let groundsnumber = 4;
let currentGround;

let targetTimer = 0;

let dixia;

let airplane;
let sky;

let x=800;
let y;

//time
let counter;
let t; //time count

let bottleNum=8; //bottle num
//let tempBottleNum=0;

let ziDanShu = 3;
var bullets = [];
var bottles = [];
let Retry;

let img_bottle, img_player;


function preload(){

  // grounds[3] = loadImage("data/beach.png");

  let ground1 = loadImage("data/dessert.png");
  let ground2 = loadImage("data/grass.png");
  let ground3 = loadImage("data/mountain.png");
  let ground4 = loadImage("data/beach.png");
  grounds = [ground1,ground2,ground3,ground4];
  currentGround = grounds[0];

  airplane = loadImage("data/airplane.png");
  sky = loadImage("data/sky.jpg");

}




function setup() {
  //createCanvas(1800,1000);
  createCanvas(windowWidth,windowHeight);

  background(0);
  noCursor();

  for(var i = 0; i < bottleNum; i++) {
    bottles[i] = new bottle();
  }
  for(var j = 0; j < ziDanShu; j++) {
    bullets[j] = new bullet(x, y, -10);
  }

  img_bottle = loadImage("data/bottle.png");
  img_player = loadImage("data/player.png");

  Retry = createButton('RESTART THE WORLD');
	Retry.hide();
  }



  // Retry = createButton('retry');
  // Retry.position(19, 19);
  // Retry.mousePressed(changeBG);



function draw() {

  targetTimer += 1;
  //x=windowWidth/2;
  y=windowHeight*0.85;

  imageMode(CORNER);
  image(sky,0,0,windowWidth,windowHeight);


  //let randomground = random(grounds)
  image(currentGround,0,0,windowWidth,windowHeight);


  textAlign(CENTER);
  fill(255);
  textSize(21);
  text(words, windowWidth/2, windowHeight*0.97);

//human
  fill(255,255,255)
  //circle(x,y,50);
  imageMode(CENTER);
  image(img_player,x,y,img_player.width/2,img_player.height/2);
  showshoot();

  t = millis() / 1000;
  if (t < bottleNum) {
    tempBottleNum = t;
  } else {
    tempBottleNum = bottleNum;
  }

  let hit = false;
  for(var i = 0; i < tempBottleNum; i++) {
    bottles[i].setPlace(mouseX, mouseY);                              //the beginning falling place of bottles
    bottles[i].display();
    bottles[i].fall();

    //when bullet is visible and contact the
    for(var j = 0; j < ziDanShu; j++) {
      if (bullets[j].bulletVisible && bottles[i].bottle1Visible) {
         hit = bottles[i].checkContact(bullets[j].x, bullets[j].y);
         if (hit) {
           bottles[i].bottle1Visible = false;
           bullets[j].bulletVisible = false;
          print("hit !!!  bottles[i] = " + i + ", bullets[j] = " + j);
           //Bang.play();
           }
      }
    }
  }

  imageMode(CENTER);
  image(airplane,mouseX,mouseY,airplane.width/2.1,airplane.height/2.1);

  //------------------------------------------TUTORIAL------------------------------------------------
  noStroke();
  if (targetTimer < 1000){
    textAlign(LEFT);
    textFont('Helvetica');
    textSize(14);
    fill(235);

    text("How to play:", 35, 35)
    text("LEFT & RIGHT key: move ", 35, 55);
    text("UP Key: shoot the plastic", 35, 75);

  }else{
    gameOver();
  }

}



function showshoot() {
    for (var i=0; i<ziDanShu; i++) {
      if (bullets[i].bulletVisible==true) {
        bullets[i].display();
        bullets[i].move();
      }
    }
  }

//anjian chufa
function keyReleased() {
      if (keyCode === RIGHT_ARROW) {
        x=x+20;
      } else if (keyCode === LEFT_ARROW) {
        x=x-20;
      } else if (keyCode === UP_ARROW) {
        // search empty slot
      for (var i=0; i< ziDanShu; i++) {
        print("bottles[i] = " + i + ", visible = " + !bullets[i].bulletVisible);

        if (!bullets[i].bulletVisible) {
          // start new bullet
          bullets[i].bulletVisible = true;
          bullets[i].x = x;
          bullets[i].y = y-125;  //shoot place
          break;
        }
      }
      }

      return false; // prevent default
    }
// function keyPressed(){
// //grounds change
//   if (keyCode== DOWN_ARROW){
//     if(counter<3){
//       counter++;
//     }else{
//       counter=0;
//     }
//   }
//
// //playermove
//   if (keyCode == RIGHT_ARROW){
//      x=x+20;
//    }
//    if (keyCode == LEFT_ARROW){
//      x=x-20;
//    }
//
// }
