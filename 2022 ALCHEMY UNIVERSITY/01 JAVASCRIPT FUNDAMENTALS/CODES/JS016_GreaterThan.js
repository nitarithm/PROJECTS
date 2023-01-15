function greater(first, last) {
    if (first > last) {
        return first;
    }
    if (last > first) {
        return last;
    }
    if (first === last) {}    
}

module.exports = greater;