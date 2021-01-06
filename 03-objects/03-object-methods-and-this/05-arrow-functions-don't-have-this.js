'use strict';

const user = {
  firstName: 'Ilya',
  sayHi() {
    const arrow = () => console.log(`Hi from ${this.firstName}!`);
    arrow();
  },
  sayBye: () => { console.log(`Bye from ${this.firstName}!`); },
};

user.sayHi(); // Hi from Ilya!
user.sayBye(); // Bye from undefined!
