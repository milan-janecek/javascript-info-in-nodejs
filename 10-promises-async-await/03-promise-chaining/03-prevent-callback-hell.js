'use strict';

const fs = require('fs').promises;

// example from ../01-callbacks/02-callback-hell-pyramid-of-doom.js re-written using promises

fs.readdir('../../01-fundamentals')
  .then((result) => {
    console.log(result);
    return fs.readdir('../../02-testing-with-mocha');
  })
  .then((result) => {
    console.log(result);
    return fs.readdir('../../03-objects');
  })
  .then((result) => {
    console.log(result);
  });

// example above works but to keep chain extendable, we should always be returning promises so chain can be easily
// extended in the future


fs.readdir('../../01-fundamentals')
  .then((result) => {
    console.log(result);
    return fs.readdir('../../02-testing-with-mocha');
  })
  .then((result) => {
    console.log(result);
    return fs.readdir('../../03-objects');
  })
  .then((result) => new Promise(((resolve, reject) => {
    console.log(result);
    resolve(result);
  })));

