/**
 *main is the entry point in Java
 *
 */


function main()
{
	this.input = new Input();
	this.input.addKeyHandler(myGetKeys); // specifying the keyboard handler
	this.input.addKeyHandler(myGetKeysForMenu);

}

function myGetKeys(keys)
{
	console.log(keys);
}

function myGetKeysForMenu(keys)
{

}

function getMouse(mousePos, direction)
{
	console.log("X: " + mousePos.x + ", Y: " + mousePos.y);
	console.log(direction);
}
