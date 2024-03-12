const fetchAge = require('./fetchAge');

// // before
// function Celebrity(name) {
//     this.name = name;

//     fetchAge(this.name, function (age) {
//         this.age = age;
//     });
// }


// after
// // version 1: Bind the Function
// function Celebrity(name) {
//     this.name = name;

//     fetchAge(this.name, function (age) {
//         this.age = age;
//     }.bind(this), 1);
// }

// version 2: Arrow Syntax
function Celebrity(name) {
    this.name = name;

    fetchAge(this.name, ((age) => {
        this.age = age;
    }));
}

module.exports = Celebrity;