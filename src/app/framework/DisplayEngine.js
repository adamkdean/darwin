function DisplayEngine(canvasId) {
    this.canvas = document.getElementById(canvasId);
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
    // push element to array
    this.elements.push(element);
}

DisplayEngine.prototype.init = function() {
    this.initPaper();
    this.initElements();
    this.loop(this);
}

DisplayEngine.prototype.initPaper = function() {
    paper.setup(this.canvas);
}

DisplayEngine.prototype.initElements = function() {
    var _this = this;
    this.elements.forEach(function(element) {
        element.init(_this);
    })
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
    this.drawElements(this.context);
    paper.view.draw();
}

DisplayEngine.prototype.drawElements = function(context) {
    this.elements.forEach(function(element) {
        element.draw(context);
    })
}