// НАСЛЕДОВАНИЕ

const ElbrusStudent = require('./inheritance/ElbrusStudent');
const Employee = require('./inheritance/Employee');
const Person = require('./inheritance/Person');
const Student = require('./inheritance/Student');

const personAlex = new Person('Alex', 42);
const studentBob = new Student('Bob', 37, 'Elbrus');

// console.log(personAlex.sayHi());
// console.log(studentBob.sayHi());
const egor = new ElbrusStudent(39, 'Egor', 'eagle');
egor.learn('JavaScript');
// console.log(egor);

const sonya = new Employee('Sophia', 22, 'Office manager');
// console.log(sonya);

const defaultElbrusStudent = new ElbrusStudent();
console.log(defaultElbrusStudent)
console.log(`${defaultElbrusStudent}`)