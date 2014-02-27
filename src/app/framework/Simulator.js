function Simulator() {

    this.parent = {};
    this.bounds = {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    };

    this.time = {};
    this.time.ticks = 0;
    this.time.seconds = 0;

    this.entities = {};
    this.entities.food = [];
}

Simulator.prototype.init = function(parent) {
    this.parent = parent;
    this.bounds = {
        top: -parent.height / 2,
        left: -parent.width / 2,
        bottom: parent.height / 2,
        right: parent.width / 2
    };
};

Simulator.prototype.update = function() {
    this.updateTime();
    this.updateFood();
};

Simulator.prototype.updateTime = function() {
    this.time.ticks++;
    if (this.time.ticks % 60 == 0) {
        this.time.seconds++;
    }

    Labels.setLabel('bl', this.time.seconds + '.' + StringHelper.pad(this.time.ticks % 60, 2));
};

Simulator.prototype.updateFood = function() {
    // should we add another?
    //if (this.time.ticks % 60 == 0) {
    if (this.time.ticks <= 20) {
        var x, y, food;
        x = MathHelper.getRandomInt(this.bounds.left, this.bounds.right);
        y = MathHelper.getRandomInt(this.bounds.top, this.bounds.bottom);
        food = new Food(x, y);
        food.init(this);
        this.entities.food.push(food);
    }

    this.entities.food.forEach(function(element) {
        element.update();
    });
};

Simulator.prototype.draw = function() {
    this.drawFood();
};

Simulator.prototype.drawFood = function() {
    this.entities.food.forEach(function(element) {
        element.draw();
    });
};