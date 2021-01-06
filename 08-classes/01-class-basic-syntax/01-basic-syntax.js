'use strict';

// class MyClass {
//   // class methods
//   constructor() { ... }
//   method1() { ... }
//   method2() { ... }
//   method3() { ... }
// ...
// }

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi from ${this.name}!`);
  }
}

const user = new User('John');
user.sayHi();
