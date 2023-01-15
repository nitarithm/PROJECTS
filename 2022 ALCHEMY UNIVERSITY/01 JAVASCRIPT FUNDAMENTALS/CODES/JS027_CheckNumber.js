function checkNumber(num) {
    if (num < 0) {
        return "negative";
    } else if (num == 0) {
        return "zero";
    } else {
        return "positive";
    }
}

module.exports = checkNumber;