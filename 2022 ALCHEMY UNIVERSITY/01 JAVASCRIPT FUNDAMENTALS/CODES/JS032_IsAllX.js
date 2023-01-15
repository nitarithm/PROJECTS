function isAllX(string) {
    for (let i = 0; i < string.length; i++) {
        if (string.toLowerCase()[i] != "x") {
            return false;
            break;
        }
    }
    return true;
}

module.exports = isAllX;