function sortStringsDown(array) {
    return array.sort(function(a,b) { return b.localeCompare(a); });   
}

module.exports = sortStringsDown;