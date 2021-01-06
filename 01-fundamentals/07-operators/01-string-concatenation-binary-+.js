'use strict';

// string concatenation with +

console.info('my' + ' concatenated string');

// if one of the operands is a string, the other one is converted to a string too

console.info('1' + 2); // "12"
console.info(2 + '1'); // "21"

// operations run from left to right => if there are two numbers followed by a string, the numbers will be added before being converted to a string

console.info(2 + 2 + '1'); // "41" and not "221"

// string concatenation and conversion is a special feature of the binary plus +. Other arithmetic operators work only with numbers and always convert their operands to numbers

console.info(2 - '1'); // 1
console.info('6' / '2'); // 3
