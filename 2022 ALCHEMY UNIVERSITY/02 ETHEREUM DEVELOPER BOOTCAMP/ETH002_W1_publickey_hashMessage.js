const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    // console.log(message);

    // turn message to utf-8 bytes
    const msgBytes = utf8ToBytes(message);
    // console.log(msgBytes);

    // turn message bytes to hash
    const msgHash = keccak256(msgBytes);
    // console.log(msgHash);

    // return message hash
    return msgHash
}

module.exports = hashMessage;