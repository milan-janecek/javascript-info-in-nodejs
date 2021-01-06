'use strict';

// Almost all array methods that call functions – like find, filter, map, with a notable exception of sort, accept an
// optional additional parameter thisArg
// Here’s the full syntax of these methods:

// arr.find(func, thisArg);
// arr.filter(func, thisArg);
// arr.map(func, thisArg);

// thisArg passes the "this" context to the function

const army = {
  minAge: 18,
  maxAge: 27,
  canJoin(user) {
    return user.age >= this.minAge && user.age < this.maxAge;
  },
};

const users = [
  {age: 16},
  {age: 20},
  {age: 23},
  {age: 30},
];

// find users, for who army.canJoin returns true
const soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length); // 2
console.log(soldiers[0].age); // 20
console.log(soldiers[1].age); // 23

users.filter(army.canJoin); // leads to error because this is undefined if we don't pass thisArg
