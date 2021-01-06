'use strict';

// classes can be defined inside another expression, passed around, returned, assigned, etc.

let User = class {
  sayHi() {
    console.log('Hello');
  }
};

const user = new User();
user.sayHi();

// if a class expression has a name, it’s visible inside the class only:

// "Named Class Expression" - (no such term in the spec, but that's similar to Named Function Expression)
User = class MyClass {
  sayHi() {
    console.log(MyClass); // [Function: MyClass]
  }
};

new User().sayHi(); // works, shows MyClass definition

// We can even make classes dynamically “on-demand”, like this:

function makeClass(phrase) {
  // declare a class and return it
  return class {
    sayHi() {
      console.log(phrase);
    }
  };
}

// Create a new class
User = makeClass('Hello');

new User().sayHi(); // Hello
