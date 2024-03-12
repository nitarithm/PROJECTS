function catchError(fn) {
    // fn(); // before

    // after
    try{
        fn();
    } catch(fn){
        console.log(fn);
    }
}

module.exports = catchError;