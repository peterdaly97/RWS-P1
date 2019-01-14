function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	// specifying the keyboard handlers
	this.input.addKeyHandler(myGetKeys);
	this.input.addUpdateLoop(draw, 33);

	this.firstKey = "a";
	this.firstPressed = false;

	this.secondKey = "p";
	this.secondPressed = false;

	this.thirdKey = ["Shift", "T"];
	this.thirdKey2 = ["t", "Shift"];
	this.thirdPressed = false;

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
	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.fillText("Demo 1: Please follow these instructions", 10, 50);
	this.ctx.fillText("Please press the a key", 10, 200);
	this.ctx.fillText("Please press the p key", 10, 350);
	this.ctx.fillText("Please press the shift and t keys", 10, 500);
	if(this.firstPressed) {
		this.ctx.drawImage(this.img, 600, 60, 150, 180);
	}
	if(this.secondPressed) {
		this.ctx.drawImage(this.img, 600, 200, 150, 180);
	}
	if(this.thirdPressed) {
		this.ctx.drawImage(this.img, 800, 340, 150, 180);
	}
	if(this.thirdPressed && this.thirdPressed && this.firstPressed) {
		this.ctx.fillText("Demo finished, congratulations!", 10, 650);
	}
}


// Declare the keyboardhandler function
// The name of the function is what is passed to
// the addKeyHandler function
function myGetKeys(keys) {
	if(keys.length > 0) {
		keys.forEach(function(element) {
			if(element === this.firstKey) {
				this.firstPressed = true;
			}
			if(element === this.secondKey) {
				this.secondPressed = true;
			}
		});
		console.log(keys);
		if(this.thirdKey[0] === keys[0] && this.thirdKey[1] === keys[1] ||
			this.thirdKey2[0] === keys[0] && this.thirdKey2[1] === keys[1]) {
			console.log("Ding");
			this.thirdPressed = true;
		}
	}
}
