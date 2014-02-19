$(function() {
	var displayEngine = new DisplayEngine();
	var box = new Box();
	var grid = new Grid();

	displayEngine.add(box);
	displayEngine.add(grid);
	displayEngine.update();
	displayEngine.draw();
});