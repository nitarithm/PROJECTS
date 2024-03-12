function playerHandScore(hand) {
    // console.log(hand)
    let jumlah = 0;

    for (let i = 0; i < hand.length; i++) {
        // console.log(hand[i])
        if (hand[i] === "K") {
            jumlah += 4
        } else if (hand[i] === "Q") {
            jumlah += 3
        } else if (hand[i] === "J") {
            jumlah += 2
        }
        // console.log(jumlah)
    }

    return jumlah
}

module.exports = playerHandScore;