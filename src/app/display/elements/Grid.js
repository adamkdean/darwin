function Grid() {
	//
}

Grid.prototype = new DisplayElement();

Grid.prototype.update = function() {
	console.log('Grid update');
	this.updateElement()
};

Grid.prototype.draw = function() {
	console.log('Grid draw');
	this.drawElement()
};