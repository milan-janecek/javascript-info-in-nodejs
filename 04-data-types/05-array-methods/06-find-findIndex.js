'use strict';

// find - let result = arr.find(function(item, index, array) { returns true if item is found });
// findIndex - let result = arr.findIndex(function(item, index, array) { returns true if item is found });

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'},
];

let user = users.find((item) => item.id === 1);
let index = users.findIndex((item) => item.id === 1);

console.log(user.name); // John
console.log(users[index].name); // John

user = users.find((item) => item.id === 5);
index = users.findIndex((item) => item.id === 5);

console.log(user); // undefined
console.log(index); // -1
