'use strict';

// 1) Use Object.entries(obj) to get an array of key/value pairs from obj.
// 2) Use array methods on that array, e.g. map.
// 3) Use Object.fromEntries(array) on the resulting array to turn it back into an object.

const prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

const doublePrices = Object.fromEntries(
  // convert to array, map, and then fromEntries gives back the object
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);

console.log(doublePrices.meat); // 8
