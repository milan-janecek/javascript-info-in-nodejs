'use strict';

const a = (1 + 2, 3 + 4); // 1 + 2 is evaluated, then 3 + 4 and the last evaluated expression is returned = hence result is 7

console.info(a); // 7 (the result of 3 + 4)

let b;

b = 1 + 2, 3 + 4;

console.info(b); // 3 because comma has the lowest precedence, so 1 + 2 is evaluated, then assigned to b, then 3 + 4 is evalueated and result is ignored

