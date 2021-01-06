'use strict';

// we can create object from entries like this
const prices = Object.fromEntries([
  ['banana', 1],
  ['orange', 2],
  ['meat', 4],
]);
console.log(prices);

// we can easily create object from map like this
const map = new Map().set('banana', 1).set('orange', 2).set('meat', 4);
const obj = Object.fromEntries(map);
console.log(obj);
