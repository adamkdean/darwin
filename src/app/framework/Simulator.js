function Simulator() {
	this.parent = {};
	this.bounds = {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	};
}

Simulator.prototype.init = function(parent) {
	this.parent = parent;

	this.bounds = {
		top: -parent.canvasHeight / 2,
		left: -parent.canvasWidth / 2,
		bottom: parent.canvasHeight / 2,
		right: parent.canvasWidth / 2
	};

	console.log(this.bounds);
};

Simulator.prototype.update = function() {
	// update
};

Simulator.prototype.draw = function(context) {
	// draw
};