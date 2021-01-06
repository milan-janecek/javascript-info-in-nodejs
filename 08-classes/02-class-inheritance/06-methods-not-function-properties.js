'use strict';

// [[HomeObject]] is defined for methods both in classes and in plain objects. But for objects, methods must be
// specified exactly as method(), not as "method: function()".
//
// The difference may be non-essential for us, but it’s important for JavaScript.
//
// In the example below a non-method syntax is used for comparison. [[HomeObject]] property is not set and the
// inheritance doesn’t work:

let animal = {
  eat: function() { // intentionally writing like this instead of eat() {...
    // ...
  }

  // on the other hand - method syntax supports supers

  // eat() {
  //
  // }
};

let rabbit = {
  __proto__: animal,
  eat: function() {
    super.eat();
  }

  // on the other hand - method syntax supports super

  // eat() {
  //   super.eat();
  // }
};

rabbit.eat();  // Error calling super (because there's no [[HomeObject]])