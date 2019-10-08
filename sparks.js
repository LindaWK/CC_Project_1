class sparks{
	constructor(circX,circY,circW,circH) {
		this.posX = circX;
		this.posY = circY;
		this.sparkSize = circW;
	}
	display() {
		push();
		for(let i= this.sparkSize; i <100; i+=10) {
			ellipse(this.posX, this.posY, this.sparkSize, this.sparkSize);
			pop();
		}
		pop();
	}

}