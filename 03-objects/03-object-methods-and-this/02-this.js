'use strict';

// use this to refer to the containing object

const john = {
  name: 'John',
  age: 30,

  sayHi() {
    // "this" is the "current object"
    console.log(this.name);
  },

};

john.sayHi(); // John

// don't use outer variable (like fred in the example below) => always use this !

let fred = {
  name: 'Fred',
  age: 30,

  sayHi() {
    console.log(fred.name); // leads to an error
  },
};

const admin = fred;
fred = null; // overwrite to make things obvious

admin.sayHi(); // Whoops! inside sayHi(), the old name is used! error!
