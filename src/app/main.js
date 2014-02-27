$(function() {
    Labels.setLabel('tl', 'Darwin Project');
    Labels.setLabel('tr', 'v0.0.3');

    var displayEngine = new DisplayEngine('canvas');
    var simulator = new Simulator();
    displayEngine.add(simulator);
    displayEngine.init();
});