'use strict';

// const func = new Function([arg1, arg2, ...argN], functionBody);
//
// The function is created with the arguments arg1...argN and the given functionBody.

const sum = new Function('a', 'b', 'return a + b');

console.log(sum(1, 2)); // 3


const sayHi = new Function('console.log("Hello")');

sayHi(); // Hello
