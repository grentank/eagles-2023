// ФУНКЦИИ-КОНСТРУКТОРЫ

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.skills = [];
  this.isAlive = true;
}

// Если хотите добавить метод -- только в прототип
Person.prototype.addSkill = function (newSkill) {
  this.skills.push(newSkill);
};

const alex = new Person('Alex', 25);
alex.addSkill('JS');
alex.addSkill('HTML');
console.log(alex);

const bob = new Person('Bob', 35);
console.log(alex.addSkill === bob.addSkill);
