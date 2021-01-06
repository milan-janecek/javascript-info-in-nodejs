'use strict';

// foreach - arr.forEach(function(item, index, array) {
//   // ... do something with item
// });

// for each element call log
['Bilbo', 'Gandalf', 'Nazgul'].forEach(console.log);

// formats log based on function arguments
['Bilbo', 'Gandalf', 'Nazgul'].forEach((item, index, array) => {
  console.log(`${item} is at index ${index} in ${array}`);
});
