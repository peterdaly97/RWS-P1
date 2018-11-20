function main() {
	//Instantiate the input object
	this.input = new Input();

	// specifying the keyboard handlers
	this.input.addKeyHandler(myGetKeys);
	this.input.addKeyHandler(myGetKeysForMenu);

	// specifying the gamepad handler
	this.input.addUpdateLoop(onTimerTick, 33);
}

// Declare the gamepadhandler function
// The name of the function is what is passed to
// the addGamePadHandler function
function onTimerTick() {
    var buttons = this.input.update();
		if(buttons.length > 0) {
			buttons.forEach(function(element) {
				console.log(element);
			});
		}

}

// Declare the keyboardhandler function
// The name of the function is what is passed to
// the addKeyHandler function
function myGetKeys(keys) {
	console.log(keys);
}

// second keyboardhandler function
function myGetKeysForMenu(keys) {

}

function getMouse(mousePos, direction) {
	console.log("X: " + mousePos.x + ", Y: " + mousePos.y);
	console.log(direction);
}
