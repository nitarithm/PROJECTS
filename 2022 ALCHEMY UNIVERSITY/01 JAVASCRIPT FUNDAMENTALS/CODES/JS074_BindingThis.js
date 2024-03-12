// // before

// function thisName() {
//     return this.name;
// }

// module.exports = thisName;


// after

function thisName() {
    return this.name;
}

const newFunc = thisName.bind({name: 'Bob'});

module.exports = newFunc;