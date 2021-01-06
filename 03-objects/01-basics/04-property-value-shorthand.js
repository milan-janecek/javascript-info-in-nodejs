'use strict';

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

const userA = makeUser('John', 30);
console.log(userA.name); // John

function makeUserShorthand(name, age) {
  return {
    name,
    age,
    // ...other properties
  };
}

const userB = makeUserShorthand('Fred', 30);
console.log(userB.name); // Fred

function makeUserShorthandMixed(name, age) {
  return {
    name,
    age,
    isAdmin: true,
    // ...other properties
  };
}

const userC = makeUserShorthandMixed('Jeff', 30);
console.log(userC.name); // Jeff
console.log(userC.isAdmin); // true

