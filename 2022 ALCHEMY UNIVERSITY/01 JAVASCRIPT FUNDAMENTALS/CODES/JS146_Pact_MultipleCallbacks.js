// Pact.js
class Pact {
    // add methods to return on the instance
    constructor(executor) {
        this.thencallback = [];
        this.catchcallback = [];

        executor(
            (value) => {
                for (let i = 0; i < this.thencallback.length; i++) {
                    if (this.thencallback[i]) {
                        this.thencallback[i](value);
                    }
                }             
            },

            (value) => {
                for (let i = 0; i < this.catchcallback.length; i++) {
                    if (this.catchcallback[i]) {
                        this.catchcallback[i](value);
                    }
                }
            }
            );
    };

   
    then(callback) {
        this.thencallback.push(callback);
    };

    catch(callback) {
        this.catchcallback.push(callback);
    };
    
}

module.exports = Pact;