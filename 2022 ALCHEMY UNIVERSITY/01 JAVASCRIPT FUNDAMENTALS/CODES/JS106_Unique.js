function unique(array) {
    return array.filter((el, id) =>
    array.indexOf(el) === id);
}

module.exports = unique;