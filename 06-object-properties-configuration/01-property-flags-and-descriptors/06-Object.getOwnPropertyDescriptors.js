'use strict';

const surname = Symbol('surname');

const user = {name: 'John'};
user[surname] = 'Busby';

// returns all property descriptors - symbolic included
console.log(Object.getOwnPropertyDescriptors(user));

const userClone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));

console.log(userClone);
