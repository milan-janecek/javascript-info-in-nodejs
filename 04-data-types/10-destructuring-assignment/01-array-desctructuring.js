'use strict';

// we have an array with the name and surname
const arr = ['Ilya', 'Kantor'];

// destructuring assignment
// sets firstName = arr[0]
// and surname = arr[1]
let [firstName, surname] = arr;

console.log(firstName); // Ilya
console.log(surname); // Kantor


// nice combo with array returning methods
const [firstName2, surname2] = 'Ilya Kantor'.split(' ');

console.log(firstName2); // Ilya
console.log(surname2); // Kantor

// “Destructuring” does not mean “destructive”.
// It’s called “destructuring assignment,” because it “destructurizes” by copying items into variables. But the array itself is not modified.
//
// => It’s just a shorter way to write:

// let [firstName, surname] = arr;
firstName = arr[0];
surname = arr[1];

// Ignore elements using commas
// Unwanted elements of the array can also be thrown away via an extra comma:

// second element is not needed
const [, , title3] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(title3); // Consul

// In the code above, the first and second element of the array are skipped, the third one is assigned to title, and the rest of the array items is also skipped (as there are no variables for them)

// Works with any iterable on the right-side
// …Actually, we can use it with any iterable, not only arrays:

const [a, b, c] = 'abc'; // ["a", "b", "c"]
console.log(`${a},${b},${c}`); // a,b,c
const [one, two, three] = new Set([1, 2, 3]);
console.log(`${one},${two},${three}`); // 1,2,3

// Assign to anything at the left-side
// We can use any “assignables” at the left side.
//
// => For instance, an object property:

let user = {};
[user.name, user.surname] = 'Ilya Kantor'.split(' ');
console.log(user.name); // Ilya

// Looping with .entries()

user = {
  name: 'John',
  age: 30,
};

// loop over keys-and-values
for (const [key, value] of Object.entries(user)) {
  console.log(`${key}:${value}`); // name:John, then age:30
}

// … And the same for a map:

user = new Map();
user.set('name', 'John');
user.set('age', '30');

for (const [key, value] of user) {
  console.log(`${key}:${value}`); // name:John, then age:30
}
