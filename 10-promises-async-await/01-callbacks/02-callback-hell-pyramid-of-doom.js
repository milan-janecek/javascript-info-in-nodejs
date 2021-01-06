'use strict';

const fs = require('fs');

fs.readdir('../../01-fundamentals', (err, files) => {
  if (err) {
    throw err;
  }
  console.log('01-fundamentals files are read');
  console.log(files);
  fs.readdir('../../02-testing-with-mocha', (err, files) => {
    if (err) {
      throw err;
    }
    console.log('02-testing-with-mocha files are read');
    console.log(files);
    fs.readdir('../../03-objects', (err, files) => {
      if (err) {
        throw err;
      }
      console.log('03-objects files are read');
      console.log(files);
    });
    console.log('started reading 03-objects files');
  });
  console.log('started reading 02-testing-with-mocha files');
});

console.log('started reading 01-fundamentals files'); // this line gets printed first as readdir is async function
