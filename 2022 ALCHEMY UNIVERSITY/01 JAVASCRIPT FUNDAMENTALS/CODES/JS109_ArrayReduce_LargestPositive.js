// numbers is an array full of numbers
// let's find the largest and return it
// i.e. [2,3,5,1,4] => 5
function largest(numbers) {
    return numbers.reduce((accumulator, currentValue) => {
        return (accumulator > currentValue ? accumulator : currentValue);// <-- determine largest value
    }, 1);
}

module.exports = largest;