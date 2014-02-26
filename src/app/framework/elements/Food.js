function Food(x, y) {
	this.parent = {};
	this.x = x;
	this.y = y;
}

Food.prototype.init = function(parent) {
	this.parent = parent;
	this.canvasX = this.x + this.parent.bounds.right;
	this.canvasY = this.y + this.parent.bounds.bottom;
	this.canvasR = 3;
};

Food.prototype.update = function() {
	// update
};

Food.prototype.draw = function(context) {
	// draw
	//this.parent.bounds.

	//console.log('food draw', x, y, radius);

	context.moveTo(this.canvasX, this.canvasY);
	context.arc(this.canvasX, this.canvasY, this.canvasR, 0, MathHelper.TAU, false);
	context.fill();
};