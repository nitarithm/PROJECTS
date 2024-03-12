
function countC(str) {
    const str_low =str.toLowerCase();

    let nc = 0;

    for (let i = 0; i < str_low.length; i++){
        if (str_low[i] === "c"){
            nc++
        }
    }

    return nc;
}

module.exports = countC;