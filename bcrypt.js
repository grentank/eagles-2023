const bcrypt = require('bcrypt');

function syncHashes(n) {
  // синхронно шифрует n паролей алгоритмом bcrypt
  return new Array(n).fill(null).map(() => bcrypt.hashSync('password', 11));
}

function asyncHashes(n) {
  // асинхронно шифрует n паролей алгоритмом bcrypt
  const promises = new Array(n)
    .fill(null)
    .map(() => bcrypt.hash('password', 11));
  return Promise.all(promises);
}

console.time('sync');
syncHashes(10);
console.timeEnd('sync'); // выведет время шифрования 10 синхронных паролей
console.time('async');
asyncHashes(10).then((data) => {
  console.log(data);
  console.timeEnd('async');
}); // сравните время
