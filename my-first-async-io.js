const fs = require('fs');
const filePath = process.argv[2];

fs.readFile(filePath, 'utf8', (error, data) => {
  if (error) throw error;
  console.log(data.split('\n').length - 1);
});
