// Be careful not to use arrow function syntax here, or this may not be appropriately bound

// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position

    // Notice that position is an object with two keys x and y!

    this.position = {} // define "position" as an object

    // assigning values
    this.position.x = x
    this.position.y = y
    
}

Shape.prototype.move = function(x,y) {
    this.position.x += x
    this.position.y += y
}

module.exports = Shape;