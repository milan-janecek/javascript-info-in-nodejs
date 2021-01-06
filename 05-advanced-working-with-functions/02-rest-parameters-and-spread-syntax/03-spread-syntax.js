'use strict';

console.log(Math.max(3, 5, 1)); // 5

const arr = [3, 5, 1];

console.log(Math.max(arr)); // NaN - does not work - Math.max accepts a variable list of parameters using ...rest syntax - not array

console.log(Math.max(...arr)); // 5 - spread syntax ...<array variable> expands iterable object to list

// passing multiple iterables

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

console.log(Math.max(...arr1, ...arr2)); // 8

// we can combine spread syntax with normal values

console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 25

// also, the spread syntax can be used to merge arrays

arr1 = [3, 5, 1];
arr2 = [8, 9, 15];

const merged = [0, ...arr1, 2, ...arr2];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, then arr, then 2, then arr2)

// any iterable works for spread syntax

const str = 'Hello';
console.log([...str]); // H,e,l,l,o
