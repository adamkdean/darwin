var Grid = function() {

	var parent;

	var gridLineColour = '#dedede';
	var canvasWidth = 800, canvasHeight = 600;

	var init = function(parent) {
		console.log(parent);
		this.parent = parent;
	};

	var update = function() {
		// update
		console.log(parent.canvasHeight);
	};

	var draw = function(context) {
		// TODO
		// Make this lag less

		// for(var x = -0.5; x < canvasWidth; x += 10) {
		// 	context.moveTo(x, 0);
		// 	context.lineTo(x, canvasHeight);
		// }
		// for(var y = -0.5; y < canvasHeight; y += 10) {
		// 	context.moveTo(0, y);
		// 	context.lineTo(canvasWidth, y);
		// }
		// context.strokeStyle = gridLineColour;
		// context.stroke();
	};

	return {
		init: init,
		update: update,
		draw: draw
	};
};