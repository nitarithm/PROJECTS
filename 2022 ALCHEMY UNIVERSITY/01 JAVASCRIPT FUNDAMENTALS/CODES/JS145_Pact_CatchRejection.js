// belum ganti isinya. ini masih js144

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

            (value) => {
                if (this.catchcallback) {
                    this.catchcallback(value);
                }
            }
            );
    };

    
    
    then(callback) {
        this.thencallback = callback;
    };

    catch(callback) {
        this.catchcallback = callback;
    };
    
}

module.exports = Pact;