function Food(x, y) {
	this.parent = {};
	this.x = x;
	this.y = y;
}

Food.prototype.init = function(parent) {
	this.parent = parent;
};

Food.prototype.update = function() {
	// update
};

Food.prototype.draw = function(context) {
	// draw
	//this.parent.bounds.

	console.log(this.parent.bounds);

	var x = this.parent.bounds.left - x,
		y = this.parent.bounds.top - y,
		radius = 4;

	//console.log('food draw', x, y, radius);

	context.arc(x, y, radius, 0, 2 * Math.PI, false);
	context.fillStyle = 'black';
	context.fill();
};