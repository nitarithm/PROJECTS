const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
    }
    request(food) {
        makeFood(food).then((food) => {
            this.isReady = true;
        }
        );
    }
}

module.exports = Order;