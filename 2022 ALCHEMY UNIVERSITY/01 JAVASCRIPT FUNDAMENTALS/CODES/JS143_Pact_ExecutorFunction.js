// Pact.js

class Pact {
    // add methods to return on the instance
    constructor(executor) {
        console.log(typeof executor); // function
        executor(function() {},function() {});
    };

    
    
    then() {};

    catch() {};
    
}

module.exports = Pact;