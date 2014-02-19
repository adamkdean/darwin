function DisplayEngine() {

	this.elements = [];

}

DisplayEngine.prototype.add = function(element) {
	this.elements.push(element);
}

DisplayEngine.prototype.update = function() {
	this.elements.forEach(function(element) {
		element.update();
	})
}

DisplayEngine.prototype.draw = function() {
	this.elements.forEach(function(element) {
		element.draw();
	})
}