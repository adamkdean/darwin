function DisplayEngine(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.context = this.canvas.getContext('2d');
	this.clientSize = new ClientSize();
	this.canvasWidth = 0;
	this.canvasHeight = 0;
	this.elements = [];
}

DisplayEngine.prototype.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
    };
})();


DisplayEngine.prototype.add = function(element) {
	this.elements.push(element);
}

DisplayEngine.prototype.resize = function () {
	this.canvasWidth = this.clientSize.f_clientWidth();
	this.canvasHeight = this.clientSize.f_clientHeight();
	this.canvas.setAttribute('width', this.canvasWidth);
	this.canvas.setAttribute('height', this.canvasHeight);
	this.update();
	this.draw();
}

DisplayEngine.prototype.init = function() {
	this.initElements();
	this.initListeners();
	this.initLoop();
}

DisplayEngine.prototype.initElements = function() {
	var _this = this;
	this.elements.forEach(function(element) {
		element.init(_this);
	})
}

DisplayEngine.prototype.initListeners = function() {
	window.addEventListener('resize', this.resize, false);
}

DisplayEngine.prototype.initLoop = function() {
	this.resize();
	this.loop(this);
}

DisplayEngine.prototype.loop = function(instance) {
	instance.update();
	instance.draw();
	this.requestAnimFrame.call(window, function() {
		instance.loop(instance);
	});
}

DisplayEngine.prototype.update = function() {
	this.updateElements();
}

DisplayEngine.prototype.updateElements = function() {
	this.elements.forEach(function(element) {
		element.update();
	});
}

DisplayEngine.prototype.draw = function() {
	this.drawElements();
}

DisplayEngine.prototype.drawElements = function() {
	var _this = this;
	this.elements.forEach(function(element) {
		element.draw(_this.context);
	})
}