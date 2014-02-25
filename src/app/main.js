$(function() {

	Labels.setLabel('tl', 'Darwin Project');
	Labels.setLabel('tr', 'v0.0.2');
	Labels.hideLabel('bl');
	Labels.hideLabel('br');

	var displayEngine = new DisplayEngine('canvas');
	// var grid = new Grid();

	// displayEngine.add(grid);
	displayEngine.init();
});