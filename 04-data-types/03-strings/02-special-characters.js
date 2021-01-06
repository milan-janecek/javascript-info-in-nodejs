'use strict';

const guestList = 'Guests:\n * John\n * Pete\n * Mary';

console.log(guestList); // a multiline list of guests

const str1 = 'Hello\nWorld'; // two lines using a "newline symbol"

// two lines using a normal newline and backticks
const str2 = `Hello
World`;

console.log(str1 === str2); // true

console.log('\u00A9'); // ©
console.log('\u{20331}'); // 佫, a rare Chinese hieroglyph (long unicode)
console.log('\u{1F60D}'); // 😍, a smiling face symbol (another long unicode)

// All special characters start with a backslash character \. It is also called an “escape character”.

console.log('I\'m the Walrus!'); // I'm the Walrus!

// more elegant is to use other quotes as outer ones

console.log("I'm the Walrus!"); // I'm the Walrus!

console.log('The backslash: \\'); // The backslash: \
