'use strict';

// arrays are copied by reference

let fruits = ['Banana'];

const arr = fruits; // copy by reference (two variables reference the same array)

console.log(arr === fruits); // true

arr.push('Pear'); // modify the array by reference

console.log(fruits); // Banana, Pear - 2 items now

// arrays are just objects and can be manipulated with as such

fruits = []; // make an array

fruits[99999] = 5; // assign a property with the index far greater than its length

console.log(fruits);

fruits.age = 25; // create a property with an arbitrary name

console.log(fruits);

// DON'T USE ARRAYS AS OBJECTS AS ARRAY OPTIMIZATIONS WILL BE TURNED OFF BY JAVASCRIPT ENGINE
//
// Ways to misuse arrays
// - Add a non-numeric property like arr.test = 5.
// - Make holes, like: add arr[0] and then arr[1000] (and nothing between them).
// - Fill the array in the reverse order, like arr[1000], arr[999] and so on.
