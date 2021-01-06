'use strict';

console.log('##### break with label');

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer; // (*)
    console.log(`(${i}, ${j})`);
  }
}
console.log('Done!');

console.log('##### continue with label')

outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) continue outer; // (*)
    console.log(`(${i}, ${j})`);
  }
}
console.log('Done!');
