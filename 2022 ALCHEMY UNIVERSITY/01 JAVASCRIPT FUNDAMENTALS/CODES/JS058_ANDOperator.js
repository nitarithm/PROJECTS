function canBreathe(isConnected, hasOxygen, aboveWater) {
    if (isConnected && hasOxygen || aboveWater){
        return true;
    } else {
        return false;
    }
}

module.exports = canBreathe;