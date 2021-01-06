'use strict';

const user = {
  name: 'John',
  age: 25,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(user, null, 2)); // The space parameter is used solely for logging and nice-output purposes.

/* two-space indents:
{
  "name": "John",
  "age": 25,
  "roles": {
    "isAdmin": false,
    "isEditor": true
  }
}
*/
