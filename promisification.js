const fs = require('fs');

function myAppendFile(path, data, encoding) {
  return new Promise((res, rej) => {
    fs.appendFile(path, data, encoding, (err, result) => {
      if (err) return rej(err);

      res(result);
    });
  });
}

myAppendFile('./jokes.txt', '\nappended data', 'utf8').then(() =>
  console.log('Done!'),
);
