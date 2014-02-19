function Grid(lineColour) {
	this.parent = {};
	this.lineColour = lineColour || '#dedede';
}

Grid.prototype.init = function(parent) {
	this.parent = parent;
};

Grid.prototype.update = function() {
	// update
};

Grid.prototype.draw = function(context) {
	for(var x = -0.5; x < this.parent.canvasWidth; x += 10) {
		context.moveTo(x, 0);
		context.lineTo(x, this.parent.canvasHeight);
	}
	for(var y = -0.5; y < this.parent.canvasHeight; y += 10) {
		context.moveTo(0, y);
		context.lineTo(this.parent.canvasWidth, y);
	}
	context.strokeStyle = this.lineColour;
	context.stroke();
};