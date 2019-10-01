let height;
let rectR, rectB, rectG;

function setup() {
	createCanvas(800,800);
	background(0);
}
function draw() {
	
	rectR = random(255);
	rectB = random(255);
	rectG = random(255);
	//background(0);
	//bars()
	 if (key == "b" || key == "B") {
	 	background(0);
		bars();
	 }
	
	shape();

	
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
	ellipse(randX, randY, randS,randS);
}
function mouseDragged() {
	background(0);
	//shape();
}