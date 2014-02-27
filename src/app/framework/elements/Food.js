function Food(x, y) {
    this.parent = {};
    this.x = x;
    this.y = y;
}

Food.prototype.init = function(parent) {
    this.parent = parent;
    this.canvasX = this.x + this.parent.bounds.right;
    this.canvasY = this.y + this.parent.bounds.bottom;
    this.radius = 3;
    this.shape =  new Path.Circle(new Point(this.canvasX, this.canvasY), this.radius);
    this.shape.fillColor = 'green';
};

Food.prototype.update = function() {
    // update
    this.canvasX += MathHelper.getRandomArbitrary(-1, 1);
    this.canvasY += MathHelper.getRandomArbitrary(-1, 1);
    this.shape.position = new Point(this.canvasX, this.canvasY);
};