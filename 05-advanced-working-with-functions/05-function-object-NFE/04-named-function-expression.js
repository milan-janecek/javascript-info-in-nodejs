'use strict';

const sayHi = function(who) {
  console.log(`Hello, ${who}`);
};

sayHi('Milan');

let sayHiNamed = function func(who) { // we added name to the function expression - so that it can refer to itself
  console.log(`Hello, ${who}`);
};

sayHiNamed('Paul');

// There are two special things about the name func above, that are the reasons for it:
//
// 1 - It allows the function to reference itself internally.
// 2 - It is not visible outside of the function.

sayHiNamed = function func(who) { // we added name to the function expression - so that it can refer to itself
  console.log(`Hello, ${who}`);
};

// example when this may be issue

let myPow = function(x, n) {
  return (n === 1) ? x : (x * myPow(x, n - 1));
};

const anotherMyPow = myPow;

myPow = (x, n) => 1;

console.log(anotherMyPow(2, 3)); // always 2 because function refers to myPow which was re-assigned

// using name in function expression - the pow function expression works no matter the variable got re-assigned

let myFixedPow = function pow(x, n) {
  return (n === 1) ? x : (x * pow(x, n - 1));
};

const anotherMyFixedPow = myFixedPow;

myFixedPow = (x, n) => 1;

console.log(anotherMyFixedPow(2, 3)); // 8 - correct
