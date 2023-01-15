function factorial(n) {
    if (n === 0) {
        return 1;
    } else if (n > 0) {
        let result = 1;

        for (let i = 1; i <= n; i++) {
            result = result * i;
        }

        return result;
    } else {}
}

module.exports = factorial;