const Plant = require('./Plant');

class Flower extends Plant { // наследование методов родителя
  constructor({ name, height, color = 'white', poison: isPoisonous = false }) {
    super({ name, height }); // call parent constructor
    this.color = color;
    this.isPoisonous = isPoisonous;
    this.petals = [];
  }

  producePollen() {
    return `${this.name} produces pollen`;
  }

  static isFlower(plant) {
    return plant instanceof Flower;
  }
}

module.exports = Flower;
