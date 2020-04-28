function gameOver(){
	push()

	print("DED");
	noStroke();
  rectMode(CENTER);
	fill(97,154,232);
	rect(windowWidth/2,windowHeight/2,520,340,20);

	textFont('Georgia');
	textAlign(CENTER);
	textSize(75);
	//fill(189,217,234);
  fill(255,255,255);
	text("GAME OVER",windowWidth/2,400)

  textFont('Helvetica');
	textSize(14);
	fill(189,217,234);
  text("Normally, Plastic items can take up to 1,000 years to decompose in",windowWidth/2,440);
  text("landfills. Let's start to reduce the use of plastic products from now!",windowWidth/2,460);



	// textFont('Helvetica');
	// textSize(18);
	// fill(235);
	// let scoreString = "score: " + score;
	// text(scoreString, 300, 340);

	// if (score > highScore) {
	// 	highScore = score;
	// 	Cookies.remove('highscore');
	// 	Cookies.set('highscore', highScore);
	// }
  //
	// let highScoreString = "highscore: " + highScore;
	// text(highScoreString, 300, 360);

	Retry.show();
  //Retry.style('translate',(0,300));
	Retry.position(windowWidth/2-125,windowHeight/2+60);
	Retry.size(250,70);
  Retry.style('font-size', '21px');
  Retry.style('textFont','Helvetica');
  Retry.style('color', '#ffffff');
  Retry.style('background-color', '#aad5ed');
  Retry.style('outline-color','#aad5ed');
  Retry.style('boarder-color','#619be8');
  //Retry.style('background-image','url("data/button.png")');
  //Retry.center();

	Retry.mousePressed(reset);

	pop();
	noLoop();

}

// function changeBG() {
//     let num = Math.floor(Math.random() * 4);
//     currentGround = grounds[num];
// }

function reset(){

	Retry.hide();

  let num = Math.floor(Math.random() * 4);
  currentGround = grounds[num];


	x = 800;
	y=windowHeight*0.85;

	targetTimer = 0;


	loop();
}
