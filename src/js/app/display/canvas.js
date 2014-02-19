var Canvas = function(id) {

	var canvas = document.getElementById(id),
		context = canvas.getContext('2d'),
		clientSize = new ClientSize(),
		canvasWidth = 0,
		canvasHeight = 0,
		halfCanvasWidth = 0,
		halfCanvasHeight = 0,
		gridLineColour = '#dedede';

	var animFrame = window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            null;

	var init = function() {
		window.addEventListener('resize', resize, false);

		resize();
		animFrame(loop);
	};

	var resize = function () {
		canvasWidth = clientSize.f_clientWidth();
		canvasHeight  = clientSize.f_clientHeight();
		halfCanvasWidth  = canvasWidth / 2;
		halfCanvasHeight = canvasHeight / 2;
		canvas.setAttribute('width', canvasWidth);
		canvas.setAttribute('height', canvasHeight);
		draw();
	};

	var loop = function() {
		update();
		draw();
		animFrame(loop);
	};

	var update = function() {
		// update

	};

	var draw = function() {
		// draw
		context.clearRect(0, 0, canvasWidth, canvasHeight);

		drawGridLines();
		drawCircles();
	};

	var drawGridLines = function() {
		for(var x = -0.5; x < canvasWidth; x += 10) {
			context.moveTo(x, 0);
			context.lineTo(x, canvasHeight);
		}
		for(var y = -0.5; y < canvasHeight; y += 10) {
			context.moveTo(0, y);
			context.lineTo(canvasWidth, y);
		}
		context.strokeStyle = gridLineColour;
		context.stroke();
	};

	var drawCircles = function() {
		context.beginPath();
		context.arc(halfCanvasWidth, halfCanvasHeight, 10, 0, 2*Math.PI);
		context.strokeStyle = '#000';
		context.stroke();
	};

	return {
		init: init
	};
};