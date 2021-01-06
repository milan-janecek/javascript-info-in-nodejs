'use strict';

let counter1 = 2;
counter1++; // works the same as counter = counter + 1, but is shorter
console.log(counter1); // 3

let counter2 = 2;
counter2--; // works the same as counter = counter - 1, but is shorter
console.log(counter2); // 1

// 5++ - no - works only on variables

// prefix form
let counter3 = 1;
let a = ++counter3;
console.log(a); // 2

let counter4 = 1;
let b = counter4++; // (*) changed ++counter to counter++
console.log(b); // 1

let counter5 = 1;
console.log(2 * ++counter5); // 4

let counter6 = 1;
console.log(2 * counter6++); // 2, because counter++ returns the "old" value

