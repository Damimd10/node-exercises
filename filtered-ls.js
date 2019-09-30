const fs = require('fs');
const path = require('path');

const pathName = process.argv[2];
const fileExtension = `.${process.argv[3]}`;

fs.readdir(pathName, (error, list) => {
  if (error) throw error;

  list.filter(str => path.extname(str) === fileExtension).map(x => console.log(x));
});
