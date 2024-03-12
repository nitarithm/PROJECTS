function halfValue(numbers) {
    const halved = []

    for (let i = 0; i < numbers.length; i++){
        let new_halved
        
        const check = numbers[i] % 2
        if (check !== 0) {
            new_halved = (numbers[i] + 1) / 2
        } else {
            new_halved = numbers[i] / 2
        }
        halved.push(new_halved)
    }

    return halved
}

module.exports = halfValue;