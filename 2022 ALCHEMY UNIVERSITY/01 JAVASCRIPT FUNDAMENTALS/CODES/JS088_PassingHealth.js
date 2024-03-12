// on the file: Hero.js

// class Hero {
//     constructor(health) {
//         this.health = health;
//     }

//     takeDamage(number){
//         this.health = this.health - number;
//     }
// }

// module.exports = Hero;


// on the file: Warrior.js

const Hero = require('./Hero');


class Warrior extends Hero {
    constructor(health) {
        super(health);
        this.rage = 0;
    }

    takeDamage(number){
        super.takeDamage(number);
        this.rage += 1;
    }
}
module.exports = Warrior;