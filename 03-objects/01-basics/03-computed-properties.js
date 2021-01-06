'use strict';

const fruit = 'banana';

const bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

console.log(bag.banana); // 5

const anotherBag = {};
anotherBag[fruit] = 5;
console.log(bag.banana); // 5

