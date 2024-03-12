function fizzBuzz(numbers) {
    let hasil = '';

    for (let i = 0; i <= numbers.length; i++){
        if(numbers[i] % 3 === 0) {
            hasil += "fizz";
        }

        if (numbers[i] % 5 === 0){
            hasil += "buzz";
        }
    }

    return hasil;
}

module.exports = fizzBuzz;