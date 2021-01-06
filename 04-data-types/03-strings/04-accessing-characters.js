'use strict';

const str = 'Hello';

// the first character
console.log(str[0]); // H             <- square brackets are preferred
console.log(str.charAt(0)); // H      <- charAt is legacy way

// but there is a subtle difference in what happens when character is not found

console.log(str[1000]); // undefined
console.log(str.charAt(1000)); // '' (an empty string)

// the last character
console.log(str[str.length - 1]); // o

// iterating through characters using for..of
for (const char of 'Hello') {
  console.log(char); // H,e,l,l,o (char becomes "H", then "e", then "l" etc)
}
