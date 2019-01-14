function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	this.input.addUpdateLoop(draw, 33);

	this.buttons = [];

	this.firstKey = 0;
	this.firstPressed = false;

	this.secondKey = [1,4];
	this.secondPressed = false;

	this.initCanvas();
	this.img = new Image();
	this.img.src = "../assets/tick.png";
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
	this.buttons = this.input.update();
	this.buttons.forEach(function(element) {
		if(element[1] === this.firstKey) {
			this.firstPressed = true;
		}
	});
	if(this.buttons.length > 1) {
		console.log(this.buttons[1][1]);
		if(this.buttons[0][1] === this.secondKey[0] && this.buttons[1][1] === this.secondKey[1]
		|| this.buttons[0][1] === this.secondKey[1] && this.buttons[1][1] === this.secondKey[0]) {
			this.secondPressed = true;
		}
	}

	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Demo 1: Please follow these instructions", 10, 50);
	this.ctx.fillText("Please connect the controller", 10, 200);
	this.ctx.fillText("Please press the A key", 10, 350);
	this.ctx.fillText("Please press the B and LB keys", 10, 500);
	if(this.input.connected) {
		this.ctx.drawImage(this.img, 700, 60, 150, 180);
	}
	if(this.firstPressed) {
		this.ctx.drawImage(this.img, 600, 200, 150, 180);
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.img, 800, 340, 150, 180);
	}
	if(this.input.connected && this.secondPressed && this.firstPressed) {
		this.ctx.fillText("Demo finished, congratulations!", 10, 650);
	}
}
