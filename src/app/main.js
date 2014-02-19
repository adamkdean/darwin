$(function() {
	var displayEngine = new DisplayEngine('canvas');
	var grid = new Grid();

	displayEngine.add(grid);
	displayEngine.init();
	displayEngine.update();
	displayEngine.draw();
});