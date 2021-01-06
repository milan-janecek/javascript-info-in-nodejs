'use strict';

const [firstName, surname] = [];

console.log(firstName); // undefined
console.log(surname); // undefined

// default values
const [name = 'Guest', role = 'Unknown'] = ['Julius'];

console.log(name); // Julius (from array)
console.log(role); // Unknown (default used)

// runs only Math.random for bonusPercentage
const [salary = Math.random(), bonusPercentage = Math.trunc(Math.random() * 100.0)] = [3000];

console.log(salary); // Julius (from array)
console.log(bonusPercentage); // whatever Math.random() gets
