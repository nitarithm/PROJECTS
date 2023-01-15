function hasOne(array) {
    let satu = array.indexOf(1);

    if (satu === -1) {
        return false;
    } else {
        return true;
    }
}

module.exports = hasOne;