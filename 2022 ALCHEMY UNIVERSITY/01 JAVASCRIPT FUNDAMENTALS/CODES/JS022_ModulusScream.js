function scream(n) {

    let str = "";
    for (let i = 1; i <= n; i++) {
        if (i%2 === 1) {
            str += "a";
        } else {
            str += "A";
        }
    }
    return str;
}

module.exports = scream;