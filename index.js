const fs = require('fs');
const dir = '/Users/dingyulee/Downloads/type-challenges-main/questions';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});