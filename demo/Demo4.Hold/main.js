function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	this.input.addUpdateLoop(draw, 33);
	this.input.addKeyHandler(getKeys);

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

function getKeys(keys) {
	console.log("Ding");
	this.ctx.drawImage(this.img, 500, 100, 150, 180);
}

function draw() {
	var inputField = document.getElementById("input");
	this.input.setHoldValue(parseInt(inputField.value));

	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Demo 4: Please follow these instructions", 10, 50);
	this.ctx.fillText("By clicking on the canvas and holding any key, you'll see a tick flash", 10, 400);
	this.ctx.fillText("Change value in the text field and then hold down any key", 10, 500);
	this.ctx.fillText("By increasing the value, you can see how the tick is drawn less often", 10, 600);
	this.ctx.fillText("This shows that editing the hold value changes how often input is processed", 10, 700);

}
