'use strict';

// indexOf - arr.indexOf(item, from) – looks for item starting from index from, and returns the index where it was found, otherwise -1

let arr = [1, 0, false, 0, false];

console.log(arr.indexOf(0)); // 1
console.log(arr.indexOf(false)); // 2
console.log(arr.indexOf(null)); // -1

// lastIndexOf - arr.lastIndexOf(item, from) – same, but looks for from right to left

console.log(arr.lastIndexOf(0, 2)); // 1
console.log(arr.lastIndexOf(false, 2)); // 2
console.log(arr.lastIndexOf(null, 2)); // -1

// includes - arr.includes(item, from) – looks for item starting from index from, returns true if found

console.log(arr.includes(1)); // true
console.log(arr.includes(1, 1)); // false

// includes is that it correctly handles NaN, unlike indexOf/lastIndexOf

arr = [NaN];
console.log(arr.indexOf(NaN)); // -1 (should be 0, but === equality doesn't work for NaN)
console.log(arr.includes(NaN));// true (correct)
