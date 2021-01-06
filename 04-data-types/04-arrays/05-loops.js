'use strict';

// old fashioned c-style for loop with indexer

const fruits = ['Apple', 'Orange', 'Pear'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// for..of loop iterates over array elements

for (const fruit of fruits) {
  console.log(fruit);
}

// for..in loop works as array is also object - BUT !!! don't use it for arrays (for arrays it is slower, for..of is better)

for (const key in fruits) {
  console.log(fruits[key]); // Apple, Orange, Pear
}
