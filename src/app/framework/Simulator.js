function Simulator() {

	this.parent = {};
	this.bounds = {
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	};

	this.time = {};
	this.time.ticks = 0;
	this.time.seconds = 0;

	this.entities = {};
	this.entities.food = [];
}

Simulator.prototype.init = function(parent) {
	this.parent = parent;
	this.bounds = {
		top: -parent.canvasHeight / 2,
		left: -parent.canvasWidth / 2,
		bottom: parent.canvasHeight / 2,
		right: parent.canvasWidth / 2
	};
};

Simulator.prototype.update = function() {
	this.updateTime();
	this.updateFood();
};

Simulator.prototype.updateTime = function() {
	this.time.ticks++;
	if (this.time.ticks % 60 == 0) {
		this.time.seconds++;
	}

	Labels.setLabel('bl', this.time.seconds + '.' + StringHelper.pad(this.time.ticks % 60, 2));
};

Simulator.prototype.updateTime = function() {
	// should we add another?
	if (this.time.ticks % 60 == 0) {
		var x = MathHelper.getRandomInt(this.bounds.left, this.bounds.right);
		var y = MathHelper.getRandomInt(this.bounds.top, this.bounds.bottom);

		// add food with x/y co-ords
	}

	// update all food elements
	this.elements.food.forEach(function(element) {
		element.update();
	});
};

Simulator.prototype.draw = function(context) {
	// draw
};