function catchError(fn) {
    // fn(); // before

    // after
    try{
        fn();
    } catch(eror){
        return eror;
        
    }
    return false;
}

module.exports = catchError;