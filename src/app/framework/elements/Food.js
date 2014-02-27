function Food(x, y) {
    this.parent = {};
    this.x = x;
    this.y = y;
    this.energy = 5;
    this.maxEnergy = 20;
}

Food.prototype.init = function(parent) {
    this.parent = parent;
    this.initShape();
}

Food.prototype.initShape = function() {
    var canvasX = this.x + this.parent.bounds.right;
    var canvasY = this.y + this.parent.bounds.bottom;
    this.shape =  new Path.Circle({
        center: [canvasX, canvasY],
        radius: this.calculateRadius(this.energy),
        fillColor: 'green'
    });
}

Food.prototype.update = function() {
    this.updateEnergy();
    this.updateRadius();
}

Food.prototype.updateEnergy = function() {
    if (this.parent.time.ticks % 60 == 0) {
        if (this.energy < this.maxEnergy) {
            this.energy = (this.energy + 1 > this.maxEnergy)
                ? this.maxEnergy
                : this.energy + 1;
        }
    }
}

Food.prototype.updateRadius = function() {
    var currentRadius = this.shape.bounds.width / 2;
    var newRadius = this.calculateRadius(this.energy);
    this.shape.scale(newRadius / currentRadius);
}

Food.prototype.calculateRadius = function(value) {
    return value / 10;
}