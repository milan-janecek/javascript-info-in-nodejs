'use strict';

// the below is valid as this is evaluated at runtime

function sayHi() {
  console.log(this.name);
}

// sayHi(); would lead to error as this is undefined

const user = {name: 'John'};
const admin = {name: 'Admin'};

// use the same function in two objects
user.f = sayHi;
admin.f = sayHi;

// these calls have different this
// "this" inside the function is the object "before the dot"
user.f(); // John  (this == user)
admin.f(); // Admin  (this == admin)

admin['f'](); // Admin (dot or square brackets access the method – doesn't matter)
