function toNumber(string) {
    if(Number(string)){
        return Number(string);
    } else {
        return 0;
    }
}

module.exports = toNumber;