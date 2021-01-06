'use strict';

// reduce - let value = arr.reduce(function(accumulator, item, index, array) {
//   // ...
// }, [initial]);

// - accumulator – is the result of the previous function call, equals initial the first time (if initial is provided)
// - item – is the current array item
// - index – is its position
// - array – is the array

let arr = [1, 2, 3, 4, 5];

let result = arr.reduce((sum, current) => sum + current, 0);

console.log(result); // 15

// removed initial value from reduce (no 0)
// if there’s no initial, then reduce takes the first element of the array as the initial value and starts the iteration from the 2nd element
result = arr.reduce((sum, current) => sum + current);

console.log(result); // 15

arr = [];

// Error: Reduce of empty array with no initial value
// if the initial value exists, reduce returns it for the empty arr
arr.reduce((sum, current) => sum + current, 0); // 0
// arr.reduce((sum, current) => sum + current) - but this would throw error

// reduceRight works same as reduce but goes from the right
arr = [1, 2, 3, 4, 5];
result = arr.reduceRight((sum, current) => sum + current);
console.log(result);
