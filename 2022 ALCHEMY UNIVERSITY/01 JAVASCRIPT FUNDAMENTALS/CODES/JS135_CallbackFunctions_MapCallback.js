function map(arr, callback) {
    console.log(arr);

    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }

    console.log(newArray);
    return newArray;

}

module.exports = map;