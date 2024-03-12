// // before
// class Hero {
//     constructor() {
//         this.health = 50;
//     }
// }

// after
class Hero {
    constructor() {
        this.health = 50;
    }

    takeDamage(number){
        this.health = this.health - number;
    }
}

module.exports = Hero;