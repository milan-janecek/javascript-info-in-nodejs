'use strict';

console.info('6' / '2'); // 3, strings are converted to numbers

const str = '123';
console.info(typeof str); // string

const num = Number(str); // becomes a number 123

console.info(typeof num); // number

const age = Number('an arbitrary string instead of a number');

console.info(age); // NaN, conversion failed

console.info('');
console.info('');

console.info('Numeric conversion rules:');

const undefinedNum = Number(undefined);
console.info(`undefined is ${undefinedNum}`);

const nullNum = Number(null);
console.info(`null is ${nullNum}`);

const strNum1 = Number('123');
console.info(`'123' is ${strNum1}`);

const strNum2 = Number('   123   ');
console.info(`'   123   ' is ${strNum2}`);

const strNum3 = Number('   123zccxzc   ');
console.info(`'   123zccxzc   ' is ${strNum3}`);

const trueNum = Number(true);
console.info(`true is ${trueNum}`);

const falseNum = Number(false);
console.info(`false is ${falseNum}`);

