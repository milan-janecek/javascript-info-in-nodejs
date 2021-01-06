'use strict';

const fs = require('fs');

fs.readdir('../../01-fundamentals', (err, files) => {
  if (err) {
    throw err;
  }
  console.log('files are read');
  console.log(files);
});

console.log('started reading files'); // this line gets printed first as readdir is async function
