let height;
let rectR, rectB, rectG;

function setup() {
	createCanvas(800,800);
	background(0);
	frameRate(20);//slowed down the frame rate so you can see the flashes linger
	}
function draw() {
	//these values randomize the colors.
	let col = color(255);
	rectR = random(255);
	rectB = random(255);
	rectG = random(255);
	background(0);
	sparky(col);
	 if (key == "b" || key == "B") {//this changes it to the flashy bars.
	 	background(0);
		bars();
	 }
	 if (key == "s" || key == "S") {//this venerates the white flashes.
	 	background(0);
	 	sparky(col);
	 }
	if (key == "c" || key == "C") {//this generates the colorful flashes with the random ellipses as well.
		background(0);
		col = color(rectB,rectR,rectG, 100);
		sparky(col);
		shape();
		shape();
	}
	
	
}
	
function sparky(col) {//function for the flashes creates a new spark each time.
	//let [] pos = {2, 4, 6, 8};
	fill(col);
	let spark = new sparks(400,400,random(15,500), random(15,500));
	spark.display();
	let spark1 = new sparks(200,400,random(15,100), random(15,100));
	spark1.display();
	let spark2 = new sparks(600,400,random(15,100), random(15,100));
	spark2.display();
	let spark3 = new sparks(400,200,random(15,100), random(15,100));
	spark3.display();
	let spark4 = new sparks(400,600,random(15,100), random(15,100));
	spark4.display();

	
}
function bars() {//function for the flashy bars.
	let rectColor = color(rectR, rectG, rectB);
	for (let i = 0; i < 800; i+=20) {
		noStroke();
		fill(rectColor);
		height = random(0,800);

		rect(i, 0, 10, height);
	}
}
function shape() {//function for the flashy random ellipses.
	noStroke();
	height = random(0,800);
	let randX = random(0,width);
	let randY = random(0,height);
	let randS = random(15,70);
	fill(rectB,rectR,rectG, 100);
	//ellipse(mouseX, mouseY, 100,100);
	let spark_ = new sparks(randX, randY, random(15,100), random(15,100));
	spark_.display();
	//ellipse(randX, randY, randS,randS);
}
function mouseDragged() {//when the mouse is dragged the whole screen flashes white.
	background(255);
	//rect(0,0,width,height);
}

//my adjective is flashy