function topDouble(value, top) {
    let cont = true;
    let result = value;

    while (cont) {
        result *= 2;

        if (result > top) {
            result = result/2;
            cont = false;
        }
    }

    return result;    
}

module.exports = topDouble;