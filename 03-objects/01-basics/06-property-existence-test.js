'use strict';

const userA = {};

console.log(userA.noSuchProperty === undefined); // true means "no such property"

const userB = {name: 'John', age: 30};

console.log('age' in userB); // true, user.age exists
console.log('blabla' in userB); // false, user.blabla doesn't exist

const key = 'age';
console.log(key in userB); // true, takes the name from key and checks for such property

const obj = {
  test: undefined
};

// rather us in if you really checks for property not present in the object

console.log(obj.test); // it's undefined, so - no such property?

console.log(obj.test === undefined); // it's undefined, so - no such property?

console.log(obj.testXXX === undefined); // it's undefined, so - no such property?

console.log('test' in obj); // true, the property does exist!
console.log('testXXX' in obj); // false, the property does not exist!
