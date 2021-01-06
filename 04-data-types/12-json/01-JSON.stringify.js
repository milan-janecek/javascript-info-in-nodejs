'use strict';

const student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null,
};

const json = JSON.stringify(student);

console.log(typeof json); // we've got a string!
console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}

// a number in JSON is just a number
console.log(JSON.stringify(1)); // 1

// a string in JSON is still a string, but double-quoted
console.log(JSON.stringify('test')); // "test"

console.log(JSON.stringify(true)); // true

console.log(JSON.stringify([1, 2, 3])); // [1,2,3]

const user = {
  sayHi() { // ignored
    console.log('Hello');
  },
  [Symbol('id')]: 123, // ignored
  something: undefined, // ignored
};

console.log(JSON.stringify(user)); // {} (empty object) - because methods, Symbols, undefined fields are ignored by JSON.stringify

// nested objects are supported
let meetup = {
  title: 'Conference',
  room: {
    number: 23,
    participants: ['john', 'ann'],
  },
};

console.log(JSON.stringify(meetup));

// but there must be no circular dependencies

const room = {
  number: 23,
};

meetup = {
  title: 'Conference',
  participants: ['john', 'ann'],
};

meetup.place = room; // meetup references room
room.occupiedBy = meetup; // room references meetup

JSON.stringify(meetup); // Error: Converting circular structure to JSON
