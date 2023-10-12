// ЗАДАЧА 1
// В каком порядке выведутся цифры на консоль?
// console.log(1);
// setTimeout(() => console.log(2), 0); // register macrotask
// Promise.resolve().then(() => console.log(3)); // register microtask
// console.log(4);

// 1432 <<----

// for (let index = 0; index < 1e4; index++) {
//   Promise.resolve().then(() => console.log('micro'));
//   setTimeout(() => console.log('macro'), 0);
// }

// ЗАДАЧА 2
// В каком порядке выведутся цифры на консоль?
// ((function one() {console.log(1);})());
// setTimeout(function two() {console.log(2);}, 0);
// ((function three() {console.log(3);})());
// Promise.resolve()
//   .then(function four() {console.log(4);})
//   .then(function five() {console.log(5);});
// ((function six() {console.log(6);})());

// console.log(1);
// setTimeout(() => console.log(2), 0);
// console.log(3);
// Promise.resolve()
//   .then(() => console.log(4))
//   .then(() => console.log(5));
// console.log(6);

// 136452 <<----
// 136542
// 123456

// ЗАДАЧА 3
// В каком порядке выведутся цифры на консоль?
// const promise = new Promise((res) => {
//   console.log(1);
//   res(2);
//   console.log(3);
//   setTimeout(() => console.log(4), 0); // register macrotask
// });
// console.log(5);
// promise.then((data) => console.log(data)); // register microtask

// const promise = new Promise(function executor (res) {
//     console.log(1);
//     res(2);
//     Promise.resolve().then(function inside() {console.log('inside')})
//     console.log(3);
//     setTimeout(function four(){console.log(4)}, 0); // register macrotask
//   });
//   console.log(5);
//   promise.then(function resolveData(data){ console.log(data)}); // register microtask

// 51324
// 12345
// 51234
// 13524 <<---

// Задача 4
// async function start() {
//   await console.log(1);
//   console.log(2);
// }

// async function finish() {
//   console.log(3);
// }

// start().then(() => console.log(4));
// console.log(5);
// finish().then(() => console.log(6));

// async function start() {
//   await ((function one () {console.log(1)})());
//   ((function two () {console.log(2)})());
// }

// async function finish() {
//   ((function three () {console.log(3)})());
// }

// start().then(() => ((function four () {console.log(4)})()));
// ((function five () {console.log(5)})());
// finish().then(() => ((function six () {console.log(6)})()));

// 123456
// 521436
// 125346
// 235146
// 235461
// 153264

// ЗАДАЧА 5

// setTimeout(function timeoutOne() {
//   ((function one () {console.log(1)})());
//   Promise.resolve().then(function two () {console.log(2)});
// }, 0);

// new Promise(function executor (res) {
//   ((function () {console.log(3)})());
//   setTimeout(function timeoutTwo()  {
//     ((function () {console.log(4)})());
//     res(5);
//   }, 0);
// }).then(function thenData(data) {
//   ((function six() {console.log(6)})());
//   setTimeout(function timeoutData() {console.log(data)}, 0);
// });

// 364512
// 361452
// 132465
// 361245
// 312465

// const getSecret = () => new Promise((res) => setTimeout(res, 1000, 'secret'));

// const getDataParallel = (n) => Promise.all(new Array(n).fill(null).map(() => getSecret()));

// async function getDataSequential(n) {
//   for (let i = 0; i < n; i += 1) {
//     await getSecret();
//   }
// }

// console.time('Promise.all'); // сравните время Promise.all
// getDataParallel(10).then(() => console.timeEnd('Promise.all'));
// console.time('for loop'); // и время работы цикла for
// getDataSequential(10).then(() => console.timeEnd('for loop'));

// const inquirer = require('inquirer');
// inquirer
//   .prompt([
//     { type: 'input', name: 'username', message: 'Введи имя:' },
//     {
//       type: 'list',
//       name: 'bonuses',
//       message: 'На сколько ты опоздал?',
//       choices: [
//         { name: 'Не опаздывал', value: 0 },
//         { name: 'На 2-3 минутки', value: 1 },
//         { name: 'Опоздал больше, чем на 5 минут', value: 2 },
//       ],
//     },
//   ])
//   .then((answers) => console.log(answers));
