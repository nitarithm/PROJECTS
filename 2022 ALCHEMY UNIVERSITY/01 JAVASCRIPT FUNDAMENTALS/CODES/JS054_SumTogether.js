function sumTogether(arr1, arr2) {
    let arr_new = [];

    for (let i = 0; i < arr1.length; i++) {
        arr_new.push(arr1[i] + arr2[i])
    }

    return arr_new
}

module.exports = sumTogether;