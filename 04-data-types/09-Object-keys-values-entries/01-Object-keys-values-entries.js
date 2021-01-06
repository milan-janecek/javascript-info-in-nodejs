'use strict';

const user = {
  name: 'John',
  age: 30,
};

// loop over keys
for (const key of Object.keys(user)) {
  console.log(key); // name, age
}

// loop over values
for (const value of Object.values(user)) {
  console.log(value); // John, 30
}

// loop over values
for (const entry of Object.entries(user)) {
  console.log(`${entry[0]}:${entry[1]}`); // name:John, age:30
}
