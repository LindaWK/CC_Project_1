let height;
let rectR, rectB, rectG;

function setup() {
	createCanvas(800,800);
	background(0);
	}
function draw() {
	let col = color(255);
	rectR = random(255);
	rectB = random(255);
	rectG = random(255);
	background(0);
	sparky(col);
	 if (key == "b" || key == "B") {
	 	background(0);
		bars();
	 }
	 if (key == "s" || key == "S") {
	 	background(0);
	 	sparky(col);
	 }
	if (key == "c" || key == "C") {
		background(0);
		col = color(rectB,rectR,rectG, 100);
		sparky(col);
		shape();
	}
	
function sparky(col) {
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
	
}
function bars() {
	let rectColor = color(rectR, rectG, rectB);
	for (let i = 0; i < 800; i+=20) {
		noStroke();
		fill(rectColor);
		height = random(0,800);

		rect(i, 0, 10, height);
	}
}
function shape() {
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
function mouseDragged() {
	fill(255);
	rect(0,0,width,height);
}

//my adjective is flashy