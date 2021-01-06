'use strict';

// push/pop runs fast, shift/unshift is slow

// below is push vs unshift comparison

let t0 = new Date().getTime();

const arrA = [];

for (let i = 0; i < 10000; i++) {
  arrA.push(i);
}

let t1 = new Date().getTime();

console.log(`Pushing 10000 numbers to array took ${t1 - t0} milliseconds`);

t0 = new Date().getTime();

const arrB = [];

for (let i = 0; i < 10000; i++) {
  arrB.unshift(i);
}

t1 = new Date().getTime();

console.log(`Unshifting 10000 numbers to array took ${t1 - t0} milliseconds`);
