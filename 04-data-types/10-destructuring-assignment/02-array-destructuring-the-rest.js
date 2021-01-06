'use strict';

const [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'of the Roman Republic'];

console.log(name1); // Julius
console.log(name2); // Caesar
console.log(rest);

// Note that type of `rest` is Array.
console.log(rest[0]); // Consul
console.log(rest[1]); // of the Roman Republic
console.log(rest.length); // 2
