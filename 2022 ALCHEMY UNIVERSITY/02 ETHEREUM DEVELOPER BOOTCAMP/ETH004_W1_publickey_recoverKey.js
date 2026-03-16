const secp = require("ethereum-cryptography/secp256k1");
const hashMessage = require("./hashMessage");

async function recoverKey(message, signature, recoveryBit) {
    // console.log(message);
    // console.log(signature);
    // console.log(recoveryBit);

    // turn msg to hash
    const messageHash = hashMessage(message);
    // console.log(messageHash);

    // return the public key
    return secp.recoverPublicKey(messageHash, signature, recoveryBit);
    
}

module.exports = recoverKey;