const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    // slice the first byte off the public key
    const pubkeyArray = publicKey.slice(1);

    // hash the public key using keccak256
    const pubKeyhash = keccak256(pubkeyArray);

    // take the last 20 bytes of the keccak & return this
    return pubKeyhash.slice(-20);

}

module.exports = getAddress;