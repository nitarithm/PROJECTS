const ORDER_TYPES = require('./orderTypes');

function numberOfPizzas(orders) {
    let jml = 0;
    for (let i = 0; i < orders.length; i++) {
        if (orders[i].type === ORDER_TYPES.PIZZA) {
            jml = jml + orders[i].pizzas;
        }
    }
    return jml;
}

module.exports = numberOfPizzas;