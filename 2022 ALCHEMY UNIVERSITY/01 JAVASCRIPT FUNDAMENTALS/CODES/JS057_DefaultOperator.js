function double(x) {
    // return (x * 2); // before

    return (x * 2) || 0; // after

}

module.exports = double;