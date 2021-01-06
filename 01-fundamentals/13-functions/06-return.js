'use strict';

function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(result); // 3

// there can be multiple return statements in the function body

function checkAge(age) {
  if (age >= 18) {
    console.log('Age 18 or above!');
    return true;
  } else {
    console.log('Age below 18!');
    return false;
  }
}

const age = 15;

if (checkAge(age)) {
  console.log('Access granted!');
} else {
  console.log('Access denied!');
}

// function without return or with empty return returns undefined

function doNothing() { /* empty */ }

console.log(doNothing() === undefined); // true
