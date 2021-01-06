'use strict';

function rounding(n) {
  console.log(`Math.floor(${n}) = ${Math.floor(n)}`);
  console.log(`Math.ceil(${n}) = ${Math.ceil(n)}`);
  console.log(`Math.round(${n}) = ${Math.round(n)}`);
  console.log(`Math.trunc(${n}) = ${Math.trunc(n)}`);
}

console.log('##### ROUNDING DEMO #####');

rounding(3.1);
rounding(3.6);
rounding(-1.1);
rounding(-1.6);

// rounding to decimal part

// 1 - multiply and divide

const num = 1.23456;
console.log(Math.floor(num * 100) / 100); // 1.23456 -> 123.456 -> 123 -> 1.23

// 2 - toFixed method

const num2 = 12.34;

console.log(num2.toFixed(1)); // "12.3"

console.log(num2.toFixed(5)); // "12.34000", added zeroes to make exactly 5 digits
