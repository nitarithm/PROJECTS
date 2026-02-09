/**
 * Runs a callback function immediately
 * @param {function} callbackFunction
 */
function runCallback(callbackFunction) {
    setTimeout(function callback() {
        // the code to run after 1000 milliseconds
        callbackFunction();
    }, 1000);
}

module.exports = runCallback;