'use strict';

// strings are compared character-by-character in alphabetical order

console.log('a' > 'Z'); // true - lowercase letter is always greater than the uppercase

console.log('Österreich' > 'Zealand'); // true - Letters with diacritical marks are “out of order”

// str.codePointAt(pos) - Returns the code for the character at position pos

// different case letters have different codes
console.log('z'.codePointAt(0)); // 122
console.log('Z'.codePointAt(0)); // 90

// String.fromCodePoint(code) - Creates a character by its numeric code

console.log(String.fromCodePoint(90)); // Z

// 90 is 5a in hexadecimal system
console.log('\u005a'); // Z

// see the latin alphabhet with some more chars

let str = '';

for (let i = 65; i <= 220; i++) {
  str += String.fromCodePoint(i);
}
console.log(str);
// ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~
// ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ

console.log('čeněk' < 'švihadlo'); // true

// CORRECT COMPARISON takes locale into account - str.localeCompare(str2)

// - Returns a negative number if str is less than str2.
// - Returns a positive number if str is greater than str2.
// - Returns 0 if they are equivalent.

console.log('Österreich'.localeCompare('Zealand', 'en-US')); // -1
