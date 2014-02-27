function DisplayEngine(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.elements = [];
}

DisplayEngine.prototype.getClientWidth = function() {
    return this.filterResults (
        window.innerWidth ? window.innerWidth : 0,
        document.documentElement ? document.documentElement.clientWidth : 0,
        document.body ? document.body.clientWidth : 0
    );
}

DisplayEngine.prototype.getClientHeight = function() {
    return this.filterResults (
        window.innerHeight ? window.innerHeight : 0,
        document.documentElement ? document.documentElement.clientHeight : 0,
        document.body ? document.body.clientHeight : 0
    );
}

DisplayEngine.prototype.getScrollLeft = function() {
    return this.filterResults (
        window.pageXOffset ? window.pageXOffset : 0,
        document.documentElement ? document.documentElement.scrollLeft : 0,
        document.body ? document.body.scrollLeft : 0
    );
}

DisplayEngine.prototype.getScrollTop = function() {
    return this.filterResults (
        window.pageYOffset ? window.pageYOffset : 0,
        document.documentElement ? document.documentElement.scrollTop : 0,
        document.body ? document.body.scrollTop : 0
    );
}

DisplayEngine.prototype.filterResults = function(n_win, n_docel, n_body) {
    var n_result = n_win ? n_win : 0;
    if (n_docel && (!n_result || (n_result > n_docel)))
        n_result = n_docel;
    return n_body && (!n_result || (n_result > n_body)) ? n_body : n_result;
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

DisplayEngine.prototype.resize = function (instance) {
    instance.canvasWidth = instance.getClientWidth();
    instance.canvasHeight = instance.getClientHeight();
    instance.canvas.setAttribute('width', instance.canvasWidth);
    instance.canvas.setAttribute('height', instance.canvasHeight);
}

DisplayEngine.prototype.init = function() {
    this.initEvents();
    this.initPaper();
    this.initElements();
    this.initLoop();
}

DisplayEngine.prototype.initEvents = function() {
    var _this = this;
    window.addEventListener('resize', function() {
        _this.resize(_this);
    }, false);
    this.resize(this);
}

DisplayEngine.prototype.initPaper = function() {
    paper.setup(this.canvas);
    // Create a Paper.js Path to draw a line into it:
    var path = new paper.Path();
    // Give the stroke a color
    path.strokeColor = 'black';
    var start = new paper.Point(100, 100);
    // Move to start and draw a line from there
    path.moveTo(start);
    // Note that the plus operator on Point objects does not work
    // in JavaScript. Instead, we need to call the add() function:
    path.lineTo(start.add([ 200, -50 ]));
    // Draw the view now:
    paper.view.draw();
}

DisplayEngine.prototype.initElements = function() {
    var _this = this;
    this.elements.forEach(function(element) {
        element.init(_this);
    })
}

DisplayEngine.prototype.initLoop = function() {
    this.resize(this);
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
    //this.updateElements();
}

DisplayEngine.prototype.updateElements = function() {
    this.elements.forEach(function(element) {
        element.update();
    });
}

DisplayEngine.prototype.draw = function() {
    //this.drawElements(this.context);
}

DisplayEngine.prototype.drawElements = function(context) {
    this.elements.forEach(function(element) {
        element.draw(context);
    })
}