'use strict';

// array of [key, value] pairs
let map = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1'],
]);
console.log(map.get('1')); // str1


// Object.entries return [key, value] pairs so the easy way to turn Object to Map is this
const obj = {
  name: 'John',
  age: 30,
};
map = new Map(Object.entries(obj));
console.log(map.get('name')); // John
