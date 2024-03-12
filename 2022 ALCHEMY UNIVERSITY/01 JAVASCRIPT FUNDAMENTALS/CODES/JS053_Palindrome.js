function isPalindrome(string) {
    let newstring = "";

    for (let i = string.length - 1; i >= 0; i--) {
        newstring += string[i]
    }

    if (newstring === string){
        return true
    } else {
        return false
    }
}

module.exports = isPalindrome;