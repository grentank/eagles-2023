const Person = require('./Person');

function Student(name = 'John Doe', age = 18, bootcamp) {
  Person.call(this, name, age); // Вызов родительской функции конструктора
  this.bootcamp = bootcamp;
  this.skills = [];
}

Student.prototype.learn = function (skill) {
  this.skills.push(skill);
};

// Установить связь в цепочке прототипов
Object.setPrototypeOf(Student.prototype, Person.prototype);

module.exports = Student;
