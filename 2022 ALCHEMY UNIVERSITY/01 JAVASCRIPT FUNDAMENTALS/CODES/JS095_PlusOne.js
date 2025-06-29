function plusOne(arr) {
    
    const result = 
    arr.map(function(x) {
        return x + 1;
    });

    return result;
}

module.exports = plusOne;