function Simulator() {
	this.parent = {};
	this.bounds = {
		absoluteWidth: 0,
		absoluteHeight: 0,
		x: { 'lbound': 0, 'ubound': 0 },
		y: { 'lbound': 0, 'ubound': 0 }
	}
}

Simulator.prototype.init = function(parent) {
	this.parent = parent;

	this.bounds.absoluteWidth = parent.canvasWidth;
	this.bounds.absoluteHeight = parent.canvasHeight;
	this.bounds.x = {
		'lbound': -(parent.canvasWidth / 2),
		'ubound': parent.canvasWidth / 2
	};
	this.bounds.y = {
		'lbound': -(parent.canvasHeight / 2),
		'ubound': parent.canvasHeight / 2
	}

	console.log(this.bounds);

	Labels.setLabel('bl', 'Bounds: ' + parent.canvasWidth + 'x' + parent.canvasHeight)
};

Simulator.prototype.update = function() {
	// update
};

Simulator.prototype.draw = function(context) {
	// draw
};