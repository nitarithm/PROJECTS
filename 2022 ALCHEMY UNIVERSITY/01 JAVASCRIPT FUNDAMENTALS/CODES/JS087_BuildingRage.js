const Hero = require('./Hero');

// // before
// class Warrior {

// }


// after
class Warrior extends Hero {
    constructor() {
        super();
        this.rage = 0;
    }

    takeDamage(number){
        super.takeDamage(number);
        this.rage += 1;
    }
}
module.exports = Warrior;