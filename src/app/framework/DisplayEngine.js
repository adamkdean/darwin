function DisplayEngine(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.elements = [];
    this.width = 0;
    this.height = 0;
}

DisplayEngine.prototype.init = function() {
    this.initPaper();
    this.initEvents();
    this.initElements();
}

DisplayEngine.prototype.initPaper = function() {
	paper.install(window);
    paper.setup(this.canvas);
    this.width = paper.view.size.width;
    this.height = paper.view.size.height;
}

DisplayEngine.prototype.initEvents = function() {
	var _this = this;
	paper.view.onResize = function(event) {
    	_this.onResize(event, _this);
    };
    paper.view.onFrame = function(event) {
    	_this.onFrame(event, _this);
    };
}

DisplayEngine.prototype.initElements = function() {
    var _this = this;
    this.elements.forEach(function(element) {
        element.init(_this);
    })
}

DisplayEngine.prototype.onResize = function(event, instance) {
	instance.width = paper.view.size.width;
    instance.height = paper.view.size.height;
}

DisplayEngine.prototype.onFrame = function(event, instance) {
	instance.updateElements();
}

DisplayEngine.prototype.updateElements = function() {
    this.elements.forEach(function(element) {
        element.update();
    });
}

DisplayEngine.prototype.add = function(element) {
    this.elements.push(element);
}