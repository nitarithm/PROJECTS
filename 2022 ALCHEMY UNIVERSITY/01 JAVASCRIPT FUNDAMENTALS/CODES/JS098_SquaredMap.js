const squared = require('./squared');

function squaredMap(arr) {
    const result = arr.map(function(x) {
        return squared(x);
    });

    return result;
}

module.exports = squaredMap;