// food is an array full of food objects
// let's group them by "type" and return them
function group(foods) {
    return foods.reduce((accumulator, currentValue) => {
        // TODO: reduce logic
        const groupby = currentValue.type; // the group key
        const val = currentValue.food; // the value to store

        // initialize the group array if it doesn't exist
        accumulator[groupby] = accumulator[groupby]
            ? [...accumulator[groupby], val] // if exists, spread & append
            : [val]; // if not, start new array

        return accumulator;

    }, {} /* TODO: add initial value */ );
}

module.exports = group;

// readable version

// function group(foods) {
//     return foods.reduce((accumulator, currentValue) => {
//         const key = currentValue.type;         // Step 1: the group key
//         const value = currentValue.food;       // Step 2: the value to store

//         // Step 3: check if key exists, if not initialize
//         if (!accumulator[key]) {
//             accumulator[key] = [];
//         }

//         // Step 4: push the value into the corresponding group
//         accumulator[key].push(value);

//         return accumulator; // Step 5: return the updated object
//     }, {}); // Initial value is an empty object
// }

