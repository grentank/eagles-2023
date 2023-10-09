const Student = require('./Student');

function ElbrusStudent(age, name, phase) {
  Student.call(this, name, age, 'Elbrus');
  this.phase = phase;
}

Object.setPrototypeOf(ElbrusStudent.prototype, Student.prototype);

module.exports = ElbrusStudent;
