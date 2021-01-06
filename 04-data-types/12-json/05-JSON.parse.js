'use strict';

// let value = JSON.parse(str, [reviver]); -> deserializes JSON string

// str - JSON-string to parse.
// reviver - Optional function(key,value) that will be called for each (key, value) pair and can transform the value

// stringified array
let numbers = '[0, 1, 2, 3]';

numbers = JSON.parse(numbers);

console.log(numbers[1]); // 1

// for nested objects -> it also works
const userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

const user = JSON.parse(userData);

console.log(user.friends[1]); // 1
