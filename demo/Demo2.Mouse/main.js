function main() {
	//Instantiate the input object
	this.input = new Input();

	this.canvas = {};

	// specifying the keyboard handlers
	this.input.addUpdateLoop(draw, 33);

	this.initCanvas();
	this.img = new Image();
	this.img.src = "../assets/ring.png";

	this.finished = false;


	this.firstPos = [1200, 100];
	this.firstHit = false;
	this.secondPos = [100, 500];
	this.secondHit = false;
	this.thirdPos = [1200, 500];
	this.currentPos = this.firstPos;
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
	this.ctx.clearRect(0,0,10000,10000);
	this.ctx.fillText("Demo 2: Please follow these instructions", 10, 50);
	this.ctx.fillText("Please move the mouse to wherever the circle is", 10, 200);

	if(!this.finished) {
		this.ctx.drawImage(this.img, this.currentPos[0], this.currentPos[1], 150, 180);
	}
	if(this.finished) {
		this.ctx.fillText("Demo finished, congratulations!", 10, 650);
	}
}


// function that is triggered when mouse moves or clicks
function getMouse(direction) {
	if(Math.sqrt(((this.input.x - (this.currentPos[0] + (this.img.width / 2))) * (this.input.x - (this.currentPos[0] + (this.img.width / 2))))
	+ ((this.input.y - (this.currentPos[1] + (this.img.height / 2))) * (this.input.y - (this.currentPos[1] + (this.img.height / 2))))) < 100) {
		if(!this.firstHit) {
			this.firstHit = true;
			this.currentPos = this.secondPos;
		}
		else if(!this.secondHit) {
			this.secondHit = true;
			this.currentPos = this.thirdPos;
		}
		else{
			this.finished = true;
		}

	}
}
