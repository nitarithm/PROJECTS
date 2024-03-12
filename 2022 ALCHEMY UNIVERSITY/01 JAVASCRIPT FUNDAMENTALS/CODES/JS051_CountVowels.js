function countVowels(str) {
    const cek = str.toLowerCase();

    let nvow = 0;

    for (let i = 0; i < cek.length; i++) {
        if (cek[i] === "a" || cek[i] === "e" || cek[i] === "i" || cek[i] === "o" || cek[i] === "u" ) {
            nvow++
        }
    }

    return nvow

}

module.exports = countVowels;