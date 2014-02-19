var Engine = function(canvasId) {

	var canvas = document.getElementById(canvasId),
		context = canvas.getContext('2d'),
		clientSize = new ClientSize(),
		canvasWidth, canvasHeight, halfCanvasWidth, halfCanvasHeight,
		elements = [];

	var animFrame = window.requestAnimationFrame
					|| window.webkitRequestAnimationFrame
					|| window.mozRequestAnimationFrame
					|| window.oRequestAnimationFrame
					|| window.msRequestAnimationFrame
					|| null;

	var resize = function () {
		canvasWidth = clientSize.f_clientWidth();
		canvasHeight  = clientSize.f_clientHeight();
		halfCanvasWidth  = canvasWidth / 2;
		halfCanvasHeight = canvasHeight / 2;
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		draw();
	};

	var addElement = function(element) {
		elements.push(element);
	};

	var removeElement = function(element) {
		// TODO
		// implement remove
	};

	var init = function() {
		initElements();
		initListeners();
		initLoop();
	};

	var initElements = function() {
		for(var i = 0; i < elements.length; i++) {
			elements[i].init(this);
		}
	};

	var initListeners = function() {
		window.addEventListener('resize', resize, false);
	};

	var initLoop = function() {
		resize();
		animFrame(loop);
	};

	var loop = function() {
		update();
		draw();
		animFrame(loop);
	};

	var update = function() {
		updateElements();
	};

	var updateElements = function() {
		for(var i = 0; i < elements.length; i++) {
			elements[i].update();
		}
	};

	var draw = function() {
		context.clearRect(0, 0, canvasWidth, canvasHeight);
		drawElements();
	};

	var drawElements = function() {
		for(var i = 0; i < elements.length; i++) {
			elements[i].draw(context);
		}
	};

	return {
		init: init,
		addElement: addElement,
		removeElement: removeElement
	};
};