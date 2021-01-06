'use strict';

const str = 'stringify';

// slice - Returns the part of the string from start to (but not including) end.

console.log(str.slice(0, 5)); // 'strin', the substring from 0 to 5 (not including 5)
console.log(str.slice(0, 1)); // 's', from 0 to 1, but not including 1, so only character at 0

console.log(str.slice(2)); // 'ringify', from the 2nd position till the end

// start at the 4th position from the right, end at the 1st from the right
console.log(str.slice(-4, -1)); // 'gif'

// substring - Returns the part of the string between start and end.

// This is almost the same as slice, but it allows start to be greater than end.

// Negative arguments are (unlike slice) not supported, they are treated as 0.

// these are same for substring
console.log(str.substring(2, 6)); // "ring"
console.log(str.substring(6, 2)); // "ring"

// ...but not for slice:
console.log(str.slice(2, 6)); // "ring" (the same)
console.log(str.slice(6, 2)); // "" (an empty string)

// substr - Returns the part of the string from start, with the given length.

console.log(str.substr(2, 4)); // 'ring', from the 2nd position get 4 characters

console.log(str.substr(-4, 2)); // 'gi', from the 4th position get 2 characters
