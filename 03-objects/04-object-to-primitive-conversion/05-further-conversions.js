'use strict';

// If we pass an object as an argument, then there are two stages:
//
//   - The object is converted to a primitive (using the rules described above).
//   - If the resulting primitive isn’t of the right type, it’s converted.

const obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return '2';
  },
};

console.log(obj * 2); // 4, object converted to primitive "2", then multiplication made it a number

console.log(obj + 2); // 22 ("2" + 2), conversion to primitive returned a string => concatenation
