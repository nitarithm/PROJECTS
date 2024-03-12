function startError() {
    // example -- TypeError: x is not a function
    const x = 3;
    return x();

    // // example -- TypeError: Cannot read property 'prop' of undefined
    // let b;

    // return b.prop;

    // // example -- ReferenceError: z is not defined
    // return z();

    // // example -- SyntaxError: Unexpected number
    // return a.5;
}

module.exports = startError;