const fs = require('fs/promises');

async function calculateTotal() {
  const filenames = await fs.readdir('./data', 'utf8');
  // const readFilePromises = filenames.map((filename) =>
  //   fs.readFile(`./data/${filename}`, 'utf8'),
  // );
  // const fileContents = await Promise.all(readFilePromises);
  // const result = fileContents.reduce((total, num) => total + Number(num), 0);
  // return result;
  let result = 0;
  for (let index = 0; index < filenames.length; index++) {
    const filename = filenames[index];
    const fileData = await fs.readFile(`./data/${filename}`, 'utf8');
    result += Number(fileData);
  }
  return result;
}

// console.log(calculateTotal());
// console.log('finish!');

console.time('start');
calculateTotal().then((data) => {
  console.log(data);
  console.timeEnd('start');
});
