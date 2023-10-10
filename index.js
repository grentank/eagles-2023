// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

const Flower = require('./classes/Flower');
const Plant = require('./classes/Plant');
const Tree = require('./classes/Tree');

// Person.prototype.greet = function () {
//   console.log(`${this.name} greets everyone!`);
// };

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`${this.name} greets everyone!`);
//   }
// }

// const alex = new Person('Alex', 38);
// const bob = new Person('Bob', 42);
// console.log(alex);
// alex.greet();
// console.log(alex.greet === bob.greet);

const birchTree = new Tree({ name: 'Birch Tree', height: 5 });
// console.log(birchTree.photosynthesize());
// birchTree.growLeaves();
// console.log(birchTree);

// const defaultTree = new Tree();
// console.log(defaultTree)

// const defaultPlant = new Plant();

// const rose = new Flower({ name: 'Rose', color: 'red' });
// console.log(rose.photosynthesize());
// console.log(rose.producePollen());

// console.log(Flower.isFlower(defaultPlant));
// console.log(Plant.getPlantType(birchTree));

// console.log(Tree.amountOfTrees);
// console.log(Tree.generateTree());
// console.log(Tree.generateTree());
// console.log(Tree.generateTree());
// console.log(Tree.generateTree());
// console.log(Tree.amountOfTrees);

const anyTree = Tree.generateTree();
anyTree.growLeaves();
// console.log(anyTree.leavesCount); // getLeavesCount()

// console.log(anyTree.age);
// anyTree.age = 0.5;
// console.log(anyTree.age);
anyTree.mature();
console.log(anyTree.age);
console.log(anyTree.getAge());
// anyTree.width
