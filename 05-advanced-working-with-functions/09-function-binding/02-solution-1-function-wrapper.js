'use strict';

let user = {
  firstName: 'John',
  sayHi() {
    console.log(`Hello, ${this.firstName}!`);
  },
};

const timerId = setInterval(() => user.sayHi(), 1000);

setTimeout(() => {
  user = {
    sayHi() { console.log('Another user in setTimeout!'); },
  };
}, 2000);

setTimeout(() => clearInterval(timerId), 3000);
