'use strict';

// indexOf

const str = 'Widget with id';

console.log(str.indexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf('widget')); // -1, not found, the search is case-sensitive

console.log(str.indexOf('id')); // 1, "id" is found at the position 1 (..idget with id)

console.log(str.indexOf('id', 2)); // 12 - the second occurrence of id

// loop to find all occurrences
const str2 = 'As sly as a fox, as strong as an ox';
const target = 'as';

let pos = -1;
while ((pos = str2.indexOf(target, pos + 1)) !== -1) {
  console.log(pos); // 7, 17, 27
}

// lastIndexOf

console.log(str.lastIndexOf('Widget')); // 0, because 'Widget' is found at the beginning
console.log(str.lastIndexOf('widget')); // -1, not found, the search is case-sensitive

console.log(str.lastIndexOf('id')); // 12, "id" is found at the position 12

console.log(str.lastIndexOf('id', 11)); // 1 - the second occurrence of id from the back is on position 1

// The bitwise NOT trick

console.log(~2); // -3, the same as -(2+1)
console.log(~1); // -2, the same as -(1+1)
console.log(~0); // -1, the same as -(0+1)
console.log(~-1); // 0, the same as -(-1+1)

const widgetStr = 'Widget';

if (~widgetStr.indexOf('Widget')) { // basically it means if found => don't use it, but understand it !
  console.log('Found it!'); // works
}

// more modern methods for substrings

console.log('Widget with id'.includes('Widget')); // true

console.log('Hello'.includes('Bye')); // false

console.log('Widget'.includes('id')); // true

console.log('Widget'.includes('id', 3)); // false, from position 3 there is no "id"

console.log('Widget'.startsWith('Wid')); // true, "Widget" starts with "Wid"
console.log('Widget'.endsWith('get')); // true, "Widget" ends with "get"s

