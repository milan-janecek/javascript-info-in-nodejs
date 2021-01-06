'use strict';

// hexa - 0x

console.log(0xff); // 255
console.log(0xFF); // 255 (the same, case doesn't matter)


// binary - 0b

const a = 0b11111111; // binary form of 255

// octa - 0o

const b = 0o377; // octal form of 255

console.log(a === b); // true, the same number 255 at both sides
