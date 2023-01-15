function maxSum(num) {
    let jml = 0;

    for (let i = 1; i <= num; i++){
        jml += i
    }

    return jml;
}

module.exports = maxSum;