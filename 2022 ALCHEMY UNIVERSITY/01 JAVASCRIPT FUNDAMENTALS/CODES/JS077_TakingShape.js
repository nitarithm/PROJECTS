// Our Shape "Constructor"
function Shape(x, y) {
    // store x and y in this.position

    // Notice that position is an object with two keys x and y!

    this.position = {} // define "position" as an object

    // assigning values
    this.position.x = x
    this.position.y = y
    
}


module.exports = Shape;