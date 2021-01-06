'use strict';

function pow(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(2, 3)); // 8

function powRec(x, n) {
  return (n === 1) ? x : (x * pow(x, n - 1));
}

console.log(powRec(2, 3)); // 8
