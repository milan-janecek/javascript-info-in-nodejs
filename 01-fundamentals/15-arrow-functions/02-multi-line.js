'use strict';

const sum = (a, b) => { // the curly brace opens a multiline function
  const result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

console.info(sum(1, 2)); // 3
