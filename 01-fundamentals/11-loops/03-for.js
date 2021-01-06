'use strict';

for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
  console.log(i);
}

// console.log(i); // error, i is visible only inside the loop

let j = 0;

for (j = 0; j < 3; j++) { // use an existing variable
  console.log(j); // 0, 1, 2
}

console.log(j); // 3, visible, because declared outside of the loop

// skipping for parts

let k = 0; // we have i already declared and assigned

for (; k < 3; k++) { // no need for "begin"
  console.log(k); // 0, 1, 2
}

// the below is identical to while

let l = 0;

for (;l < 3;) {
  console.log(l++);
}
