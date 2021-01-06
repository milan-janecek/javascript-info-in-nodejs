'use strict';

// Numeric conversion using a plus + or Number() is strict. If a value is not exactly a number, it fails

console.log(+'100px'); // NaN

// parseInt and parseFloat parses number from the string until the first non-number character is read - then the so far parsed number is returned

console.log(parseInt('100px', 10)); // 100
console.log(parseFloat('12.5em')); // 12.5

console.log(parseInt('12.3', 10)); // 12, only the integer part is returned
console.log(parseFloat('12.3.4')); // 12.3, the second point stops the reading

console.log(parseInt('a123', 10)); // NaN, the first symbol stops the process

console.log(parseInt('0xff', 16)); // 255
console.log(parseInt('ff', 16)); // 255, without 0x also works
console.log(parseInt('2n9c', 36)); // 123456
