'use strict';

const fs = require('fs').promises;

fs.readdir('../../01-fundamentals')
  .then(
    (files) => console.log(files),
    (err) => console.log(err)
  );

console.log('started reading files'); // this line gets printed first as readdir is async function
