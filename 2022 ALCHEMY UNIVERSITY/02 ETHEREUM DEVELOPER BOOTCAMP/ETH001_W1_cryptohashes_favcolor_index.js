const { sha256 } = require("ethereum-cryptography/sha256");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

// the possible colors that the hash could represent
const COLORS = ['red', 'green', 'blue', 'yellow', 'pink', 'orange'];

// given a hash, return the color that created the hash
function findColor(hash) {
    // console.log(hash);
    const hashArray = toHex(hash); // turn hash to string
    // console.log(hashArray);

    for (c in COLORS) {
        // console.log(COLORS[c]);
        const colorBytes = utf8ToBytes(COLORS[c]); // turn color string to bytes
        // console.log(colorBytes);
        const colorArray = toHex(sha256(colorBytes)); // turn color bytes to hash then to string
        // console.log(colorArray);
        
        // console.log(hashArray === colorArray);
        if (hashArray === colorArray) { // color checking & printing
            return COLORS[c];
        }
    }
}

module.exports = findColor;