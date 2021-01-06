'use strict';

// chaining - a then on promise return promise so then calls can be chained one after another

new Promise(((resolve, reject) => {
  setTimeout(() => resolve(1), 1000); // (*)
})).then((result) => { // (**)
  console.log(result); // 1
  return result * 2;
}).then((result) => { // (***)
  console.log(result); // 2
  return result * 2;
}).then((result) => {
  console.log(result); // 4
  return result * 2;
});

// A classic newbie error: technically we can also add many .then to a single promise. This is not chaining.

const promise = new Promise(((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
}));

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});

promise.then((result) => {
  console.log(result); // 1
  return result * 2;
});
