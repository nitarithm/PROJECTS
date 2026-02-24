// timer.js

function timer() {
    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            // do something in here
            resolve('resolve successful!');
        }, 1000);
    
    });

    promise.then(function(message) {
    console.log(message);
    });

    return promise;
}

module.exports = timer;