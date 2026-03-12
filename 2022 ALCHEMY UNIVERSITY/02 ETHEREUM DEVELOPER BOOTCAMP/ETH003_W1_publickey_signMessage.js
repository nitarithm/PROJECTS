const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require('./hashMessage');

const PRIVATE_KEY = "abcabcabc"; // dummy; different with the real key from alchemy.

async function signMessage(msg) {
	// turn msg to hash
    const messageHash = hashMessage(msg);
    
	// return the signed hashed-message
    return secp.sign(messageHash, PRIVATE_KEY, { recovered: true });
}

module.exports = signMessage;