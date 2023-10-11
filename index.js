// const myPromise = new Promise((resolve, reject) => {
//   //   resolve(42);
//   setTimeout(() => {
//     resolve(42);
//   }, 1000);
//   //   reject('my custom error');
// });

// console.log(myPromise);

// myPromise
//   .then((data) => console.log('Got data:', data))
//   .catch((err) => console.log('Got an error:', err));

// console.log('After promise');

const fs = require('fs').promises;

// fs.readFile(,)

// 'no-console': 'off'
// console.log('Start operation');

// const data = fs
//   .readFile('./.eslintrc.js', 'utf-8')
//   .then((fileData) => {
//     const newFileData = fileData.replace('rules: {},', "rules: { 'no-console': 'off' },");
//     return fs.writeFile('./.eslintrc.js', newFileData, 'ddddd');
//   })
//   .then(() => {
//     console.log('Completed!');
//   })
//   .catch((err) => console.error(err))
//   .then(() => fs.readFile('./data/temp.txt', 'utf8'))
//   .then(console.log); // .then((data) => console.log(data))

// console.log(data);

function readAndAdd() {
  fs.readdir('./data', 'utf-8')
    .then((filenames) => {
      console.log(filenames);
      const promisesArray = filenames.map((filename) =>
        fs.readFile(`./data/${filename}`, 'utf8'),
      );
      return Promise.all(promisesArray);
    })
    .then((values) => {
      const totalSum = values.reduce((acc, cur) => acc + Number(cur), 0);
      return totalSum;
    })
    .then((data) => {
      console.log('Total sum: ', data);
      return fs.writeFile('./result.txt', data.toString(), 'utf8');
    })
    .then(() => console.log('Done!'))
    .catch(console.log);
}

// readAndAdd();

function fetchOneJoke() {
  return fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => response.json())
    .then((data) => data.value);
}

function fetchJokesAndWrite() {
  const promises = new Array(3).fill(null).map(fetchOneJoke);
  Promise.all(promises)
    .then((jokes) => fs.writeFile('./jokes.txt', jokes.join('\n'), 'utf8'))
    .then(() => console.log('Jokes have been saved'));
}

fetchJokesAndWrite();
