const Shape = require('./Shape');

// // before
// function Circle(x, y, radius) {
//     Shape.call(this, /* pass arguments to shape */);
//     // store radius on this
// }

// after
function Circle(x, y, radius) {
    Shape.call(this, x, y, radius);
    // store radius on this
    this.radius = radius
}

Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;