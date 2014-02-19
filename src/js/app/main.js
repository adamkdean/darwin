$(function() {

	Labels.setLabel('tl', 'Darwin Project');
	Labels.setLabel('tr', 'v0.0.1');
	Labels.setLabel('bl', '0');
	Labels.setLabel('br', 'Idle');

	var engine = new Engine('canvas');
    engine.addElement(new Grid());
    engine.init();

    // var drawCircles = function() {
    //     context.beginPath();
    //     context.arc(halfCanvasWidth, halfCanvasHeight, 10, 0, 2*Math.PI);
    //     context.strokeStyle = '#000';
    //     context.stroke();
    // };

});