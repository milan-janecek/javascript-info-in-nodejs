'use strict';

// filter - let results = arr.filter(function(item, index, array) {
//   // if true item is pushed to results and the iteration continues
//   // returns empty array if nothing found
// });

const users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'},
];

let someUsers = users.filter((item) => item.id < 3);

console.log(someUsers); // 2

someUsers = users.filter((item) => item.id < 1);

console.log(someUsers); // []
