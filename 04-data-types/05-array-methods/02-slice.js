'use strict';

// slice - arr.slice([start], [end])
// It returns a new array copying to it all items from index start to end (not including end). Both start and end can
// be negative, in that case position from array end is assumed. It is similar to string.slice

const arr = ['t', 'e', 's', 't'];
console.log(arr.slice(1, 3)); // e,s (copy from 1 to 3)
console.log(arr.slice(-2)); // s,t (copy from -2 till the end)
console.log(arr); // [ 't', 'e', 's', 't' ] - original array not modified

const arrCopy = arr.slice(); // copy array
console.log(arrCopy);
console.log(arr === arrCopy); // false - different array objects
