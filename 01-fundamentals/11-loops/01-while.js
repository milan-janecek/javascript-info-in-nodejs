'use strict';

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  i++;
  console.log(`Looping for the ${i} time`);
}

let j = 3;
while (j) { // when j becomes 0, the condition becomes falsy, and the loop stops
  console.log(`Value of j is ${j} time`);
  j--;
}

let k = 3;
while (k) console.log(k--);
