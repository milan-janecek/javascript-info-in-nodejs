'use strict';

// cloning has to be done manually - by for..in loop

const john = {
  name: 'John',
  age: 30,
};

const johnClone = {}; // the new empty object

// let's copy all user properties into it
for (const key in john) {
  johnClone[key] = john[key];
}

// now clone is a fully independent clone
johnClone.name = 'Pete'; // changed the data in it - be him Pete :-)

console.log(john.name); // still John in the original object

// OR by Object.assign - shorter => preferred

const jeff = {
  name: 'Jeff',
  age: 30,
};

const jeffClone = Object.assign({}, jeff);

jeffClone.name = 'Rich';

console.log(jeff.name); // still Jeff in the original object

// adding/merging properties using Object.assign

const martin = {name: 'Martin'};

const permissions1 = {canView: true};
const permissions2 = {canEdit: true};

// copies all properties from permissions1 and permissions2 into user
const martinRef = Object.assign(martin, permissions1, permissions2, {name: 'Adolf'});

console.log(`Name: ${martin.name}, CanView: ${martin.canView}, CanEdit: ${martin.caEdit}`);
console.log(martin === martinRef);

// cloning nested objects - problem

const rob = {
  name: 'Rob',
  sizes: {
    height: 182,
    width: 50,
  },
};

const robClone = Object.assign({}, rob);

console.log(rob.sizes === robClone.sizes); // true, same object - Object.assign just copies references - it is not recursive

// user and clone share sizes
rob.sizes.width++; // change a property from one place
console.log(robClone.sizes.width); // 51, see the result from the other one

// for deep cloning - use library lodash and _.cloneDeep method
