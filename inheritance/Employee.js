const Person = require('./Person');

function Employee(name, age, position) {
  Person.call(this, name, age);
  this.position = position;
  this.salary = 0;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

module.exports = Employee;
