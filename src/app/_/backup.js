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

// var Engine = function() {
//  //
// };

// var DisplayEntity = function() {
//  //
// };


// var DisplayElement = {
//  name: '',
//  newInstance: function() {
//      return $.extend(true, {}, this);
//  },
//  init: function(name) {
//      this.name = name;
//  },
//  myName: function() {
//      return this.name;
//  }
// };

// $(function() {

//  var a = {},
//      b = {};

//  a = DisplayElement.newInstance();
//  b = DisplayElement.newInstance();

//  a.init('im a');
//  b.init('im b');

//  console.log(a.myName(), b);

// });

