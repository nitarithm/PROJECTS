function sortStringsUp(array) {
    return array.sort(function(a,b) { return a.localeCompare(b); });
}

module.exports = sortStringsUp;