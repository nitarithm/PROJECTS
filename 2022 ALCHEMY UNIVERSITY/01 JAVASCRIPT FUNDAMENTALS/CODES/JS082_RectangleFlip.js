const Shape = require('./Shape');

function Rectangle(x, y, height, width) {
    Shape.call(this, x, y, height, width);

    this.x = x
    this.y = y
    this.height = height
    this.width = width
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function(){
    const h_new = this.width;
    const w_new = this.height;

    this.height = h_new;
    this.width = w_new;
}


module.exports = Rectangle;