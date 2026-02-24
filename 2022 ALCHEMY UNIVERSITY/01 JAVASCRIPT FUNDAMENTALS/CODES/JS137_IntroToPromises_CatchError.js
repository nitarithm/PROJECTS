const { makeFood } = require('./Kitchen');

class Order {
    constructor() {
        this.isReady = false;
        this.error = "order is ok";
    };


    request(food) {
        makeFood(food)
        .then((food) => {
            this.isReady = true;
        })

        .catch((food) => {
            this.error = "No Burgers Left";
        });
    }

}

module.exports = Order;