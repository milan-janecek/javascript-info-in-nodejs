'use strict';

function User() {
  console.log(new.target);
}

// without "new":
User(); // undefined

// with "new":
new User(); // [Function: User]


function UserC(name) {
  if (!new.target) { // if you run me without new
    return new UserC(name); // ...I will add new for you
  }

  this.name = name;
}

const john = UserC('John'); // redirects call to new User
console.log(john.name); // John
