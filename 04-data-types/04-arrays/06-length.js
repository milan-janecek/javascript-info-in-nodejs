'use strict';

// The length property automatically updates when we modify the array. To be precise, it is actually not the count of
// values in the array, but the greatest numeric index plus one

const fruits = [];
fruits[123] = 'Apple';

console.log(fruits);
console.log(fruits.length); // 124

// we can change length !

const arr = [1, 2, 3, 4, 5];

console.log(arr);
arr.length = 10;

console.log(arr);

arr.length = 2; // truncate to 2 elements
console.log(arr); // [1, 2]

arr.length = 5; // return length back
console.log(arr[3]); // undefined: the values do not return

// easies way to truncate the array
arr.length = 0;

console.log(arr);

