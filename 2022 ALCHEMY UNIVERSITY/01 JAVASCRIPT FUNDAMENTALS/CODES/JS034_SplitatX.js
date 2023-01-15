function splitAtX(string) {
    let idx = string.indexOf("x");

    if (idx != -1) {
        let half0 = string.slice(0, idx);
        let half1 = string.slice(idx + 1);

        if (half0.length >= half1.length) {
            return half0;
        } else {
            return half1;
        }
    }
}

module.exports = splitAtX;