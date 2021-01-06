'use strict';

// A handler, used in .then(handler) may create and return a promise.
// In that case further handlers wait until it settles, and then get its result.
// Returning promises allows us to build chains of asynchronous actions.

new Promise(((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
})).then((result) => {
  console.log(result); // 1
  return new Promise((resolve, reject) => { // (*)
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then((result) => { // (**)
  console.log(result); // 2
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(result * 2), 1000);
  });
}).then((result) => {
  console.log(result); // 4
});
