function endsWithX(string) {
    let l = string.length;

    if (string.toLowerCase()[l-1] === "x") {
        return true;
    } else {
        return false;
    }
}

module.exports = endsWithX;