const Plant = require('./Plant');

class Tree extends Plant {
  static amountOfTrees = 0;

  #age;

  constructor(options) {
    super(options);
    this.leaves = [];
    this.#age = options?.age || 0;
  }

  get age() {
    // console.log('Accessing tree`s age')
    return this.#age;
  }

  getAge() {
    return this.#age;
  }

  set age(newAge) {
    if (typeof newAge !== 'number') {
      console.log('Invalid age');
      return;
    }
    if (Math.abs(newAge - this.#age) >= 1) {
      console.log('Invalid age');
    }
    // this.#age = newAge;
  }

  mature() {
    this.#age += 1;
  }

  get leavesCount() {
    return this.leaves.length;
  }

  growLeaves() {
    this.leaves = new Array(Math.floor(Math.random() * 1000)).fill('leaf');
  }

  grow() {
    this.height += 2;
  }

  static generateTree() {
    this.amountOfTrees += 1;
    return new Tree();
  }
}

module.exports = Tree;
