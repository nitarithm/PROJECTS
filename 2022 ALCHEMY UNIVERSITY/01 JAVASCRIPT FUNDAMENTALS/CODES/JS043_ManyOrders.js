function numberOfPizzas(orders) {
    let jml = 0;
    for (let i = 0; i<orders.length; i++) {        
        jml = jml + orders[i].pizzas;
    }
    return jml;
}

module.exports = numberOfPizzas;