function unique(array) {
    let last = array[0];
    let newArr = [];
    newArr.push(last);

    if (array.length > 1) {
        for (let i = 1; i < array.length; i++) {
            let ele = array[i];
            if (newArr.indexOf(ele) === -1) {
                newArr.push(ele);
                last = ele;
            }
        }
    }

    return newArr;
}

module.exports = unique;