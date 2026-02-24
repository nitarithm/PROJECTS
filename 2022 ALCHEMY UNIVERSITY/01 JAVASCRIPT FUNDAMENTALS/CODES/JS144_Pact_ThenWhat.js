// Pact.js

class Pact {
    // add methods to return on the instance
    constructor(executor) {
        
        executor(
            (value) => {
                if (this.thencallback) {
                    this.thencallback(value);
                }
            },
            function() {}
        );
    };

    
    
    then(callback) {
        this.thencallback = callback;
    };

    catch() {};
    
}

module.exports = Pact;