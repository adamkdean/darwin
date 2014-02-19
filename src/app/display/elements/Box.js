function Box() {
	//
}

Box.prototype = new DisplayElement();

Box.prototype.update = function() {
	console.log('Box update');
	this.updateElement()
};

Box.prototype.draw = function() {
	console.log('Box draw');
	this.drawElement()
};