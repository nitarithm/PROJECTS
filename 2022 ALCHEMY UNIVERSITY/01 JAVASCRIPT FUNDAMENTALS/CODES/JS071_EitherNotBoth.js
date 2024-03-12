function eitherNotBoth(num) {
    if((num % 3) || (num % 5)){
        return true;
    } else {
        return false;
    }
}

module.exports = eitherNotBoth;