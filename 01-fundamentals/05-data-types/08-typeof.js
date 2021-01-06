'use strict';

console.info(typeof undefined); // "undefined"

console.info(typeof 0); // "number"

console.info(typeof 10n);// "bigint"

console.info(typeof true); // "boolean"

console.info(typeof "foo"); // "string"

console.info(typeof Symbol("id")); // "symbol"

console.info(typeof Math); // "object"  (1)

console.info(typeof null); // "object"  (2)

console.info(typeof console.info); // "function"  (3)