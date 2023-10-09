function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(`Hi, my name is ${this.name}`);
};

module.exports = Person;
