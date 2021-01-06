'use strict';

// For looping over a map, there are 3 methods:

// map.keys() – returns an iterable for keys
// map.values() – returns an iterable for values
// map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of

const recipeMap = new Map([
  ['cucumber', 500],
  ['tomatoes', 350],
  ['onion', 50],
]);

// iterate over keys (vegetables)
for (const vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, onion
}

// iterate over values (amounts)
for (const amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (const entry of recipeMap) { // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// The iteration goes in the same order as the values were inserted. Map preserves this order, unlike a regular Object

// runs the function for each (key, value) pair
recipeMap.forEach((value, key, map) => {
  console.log(`${key}: ${value}`); // cucumber: 500 etc
});
