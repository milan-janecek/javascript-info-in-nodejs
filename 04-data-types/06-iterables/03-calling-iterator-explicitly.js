'use strict';

const str = 'Hello';

// does the same as
// for (let char of str) alert(char);

const iterator = str[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  console.log(result.value); // outputs characters one by one
}
