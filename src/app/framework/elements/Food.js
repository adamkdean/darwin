function Food() {
	this.parent = {};
}

Food.prototype.init = function(parent) {
	this.parent = parent;
};

Food.prototype.update = function() {
	// update
};

Food.prototype.draw = function(context) {
	// draw
};