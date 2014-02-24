$(function() {
	var displayEngine = new DisplayEngine('canvas');

	var grid = new Grid();
	displayEngine.add(grid);



	// and we're off
	displayEngine.init();
});