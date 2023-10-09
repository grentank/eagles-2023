// const person = {
//   name: 'Alex',
//   age: 45,
//   'known languages': ['JS'],
// };

// person.age
// person.name
// person["known languages"]

// const myKey = 'name';

// console.log(person[myKey]);

// console.log(person);

// Object.keys(person).forEach((key) => {
//   console.log(`Person has property ${key}, that has a value of ${person[key]}`);
// });

// console.log(Object.entries(person))
// const [[key, name]] = Object.entries(person);
// console.log(key, name);

// const filters = {
//     age: { min: 18, max: 40},
//     experience: 6
// }

// const names = ['ALex', 'Bob', 'Charlie'];
// names.color = 'WHITE';
// console.log(names[2], names[3]);

// console.log('name' in person);
// console.log('isProgrammer' in person);
// console.log('toString' in person);

// const key = 'toString';

// if (key in person) {
//   console.log(person[key]);
// }

// console.log(person.hasOwnProperty('name'));
// console.log(person.hasOwnProperty('toString'));

// console.log(Object.prototype.hasOwnProperty.call(person, 'name'));
// console.log(Object.prototype.hasOwnProperty.call(person, 'toString'));

// for (let key in person) {
//     if(Object.prototype.hasOwnProperty.call(person, key)) {
// /* something */
//     }
//    }

// for (let index = 0; index < Object.keys(person).length; index += 1) {
//   const key = Object.keys(person)[index];
//   const value = person[key];
// }

function sayHelloMethod() {
  console.log(`${this.name} says hello!`);
}

// const sayHelloMethod = () => {
//   console.log(`${this.name} says hello!`);
// };

const person = {
  name: 'Alex',
  age: 45,
  languages: ['JS', 'HTML', 'CSS'],
  sayHello: sayHelloMethod,
};

const person2 = {
  name: 'Bob',
  age: 35,
  languages: ['Italian'],
  sayHello: sayHelloMethod,
};

const people = [
  {
    name: 'Charlie',
    sayHello() {
      console.log(`${this.name} says hello!`);
    },
  },
];

// person.sayHello();
// person2.sayHello();
// // people[0].sayHello();

// console.log(person.sayHello === person2.sayHello);

// module.exports = { hello: 'World' };

// module.exports.hello = 'World';

// console.log(this); // <- module.exports

// function showGlobal() {
//   console.log(this);
// }

// showGlobal();

// const names = ['Bob', 'Charlie'];
// names.Alex = { age: 35 };
// console.log(names);

// const boundFunction = sayHelloMethod.bind({ name: 'Elon' });
// boundFunction();
