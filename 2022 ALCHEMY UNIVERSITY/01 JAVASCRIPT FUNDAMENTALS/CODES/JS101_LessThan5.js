function lessThanFive(array) {
    const lessthan5 = array.filter((function(el) {
        return (el < 5 );
    }));

    return lessthan5;
}

module.exports = lessThanFive;