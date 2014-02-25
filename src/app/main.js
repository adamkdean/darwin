$(function() {

	Labels.setLabel('tl', 'Darwin Project');
	Labels.setLabel('tr', 'v0.0.2');
	Labels.hideLabel('bl');
	Labels.hideLabel('br');

	var displayEngine = new DisplayEngine('canvas');
	var simulator = new Simulator();
	displayEngine.add(simulator);
    displayEngine.init();

});