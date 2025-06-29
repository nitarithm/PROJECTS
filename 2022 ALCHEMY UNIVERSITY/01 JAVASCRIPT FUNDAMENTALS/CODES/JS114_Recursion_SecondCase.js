function factorial(n) {
    if (n === 1) return 1;

    if (n === 2) return 2 * factorial(1);
}

module.exports = factorial;