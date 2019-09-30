console.log(
  process.argv.slice(2, process.argv.length).reduce((acc, el) => Number(acc) + Number(el), 0),
);
