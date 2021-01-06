'use strict';

// integer properties (names are integers or converible to integers) are sorted in asc order

const codes = {
  49: 'Germany',
  41: 'Switzerland',
  44: 'Great Britain',
  // ..,
  1: 'USA',
};

for (const code in codes) {
  if ({}.hasOwnProperty.call(codes, code)) {
    console.log(code); // 1, 41, 44, 49
  }
}

// other properties are sorted as defined

const user = {
  name: 'John',
  age: '30',
};

for (const prop in user) {
  if ({}.hasOwnProperty.call(user, prop)) {
    console.log(`${prop}: ${user[prop]}`);
  }
}

// when we have object with mixed properties (integer + non-integer) => first go ordered integer properties, then go other as they were defined

const car = {
  make: 'Peugeot',
  model: '308SW',
  2: false,
  1: true,
};

for (const prop in car) {
  if ({}.hasOwnProperty.call(car, prop)) {
    console.log(`${prop}: ${car[prop]}`);
  }
}

