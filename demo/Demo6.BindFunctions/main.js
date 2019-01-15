function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	this.input.addUpdateLoop(draw, 33);

	this.initCanvas();
	this.img = new Image();
	this.img.src = "../assets/tick.png";
	this.x = 500;
	this.y = 500;

	this.moveUp = this.moveUp.bind(this);
	this.moveDown = this.moveDown.bind(this);
	this.moveLeft = this.moveLeft.bind(this);
	this.moveRight = this.moveRight.bind(this);

	this.input.bind(this.moveUp, "ArrowUp");
	this.input.bind(this.moveDown, "ArrowDown");
	this.input.bind(this.moveLeft, "ArrowLeft");
	this.input.bind(this.moveRight, "ArrowRight");
}

function moveUp() {
	this.y -= 3;
}

function moveDown() {
	this.y += 3;
}

function moveLeft() {
	this.x -= 3;
}

function moveRight() {
	this.x += 3;
}

function initCanvas() {
	//this.canvas = document.getElementById("mycanvas");
    // Use the document object to create a new element canvas.
    this.canvas = document.createElement("canvas");
    // Assign the canvas an id so we can reference it elsewhere.
    this.canvas.id = "mycanvas";
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // We want this to be a 2D canvas
    //var ctx = canvas.getContext("2D");
    this.ctx = this.canvas.getContext("2d");
		this.ctx.font = "50px Arial";

    // Adds the canvas element to the document.
    document.body.appendChild(this.canvas);

}


function draw() {
	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Demo 6: Please follow these instructions", 10, 50);
	this.ctx.fillText("I've bound functions to the arrow keys", 10, 150);
	this.ctx.fillText("These functions  move the tick on the screen", 10, 250);
	this.ctx.drawImage(this.img, this.x, this.y, 150, 180);
}
