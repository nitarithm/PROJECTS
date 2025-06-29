const { MAX_STACK_SIZE } = require('./config');

class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        if(this.items.length < MAX_STACK_SIZE) {
            this.items.push(item)
        } else {
            throw new Error("error: overflow")
        }
        
    }
    pop() {
        if(this.items.length > 0) {
            return this.items.pop()
        } else {
            throw new Error("error: underflow")
        }
        
    }
    isEmpty() {
        
    }
    peek() {
        
    }
}

module.exports = Stack;
