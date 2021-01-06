'use strict';

// sort - The call to arr.sort() sorts the array in place, changing its element order, it also returns the sorted array,
// but the returned value is usually ignored, as arr itself is modified

let arr = [1, 2, 15];
arr.sort(); // the method reorders the content of arr
console.log(arr); // 1, 15, 2  => !!!!! The items are sorted as strings by default !!!!!

// to use different sorting strategy - we should provide a function - below is example as numbers
arr.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  else return 0;
});
console.log(arr); // 1, 2, 15

// shorter alternative as function is only required to return >0 if a is greater and <0 if a is lower
arr = [1, 2, 15];
arr.sort((a, b) => a - b);
console.log(arr); // 1, 2, 15

// use localeCompare for strings

const countries = ['Österreich', 'Andorra', 'Vietnam'];

console.log(countries.sort((a, b) => (a > b ? 1 : -1))); // Andorra, Vietnam, Österreich (wrong)
console.log(countries.sort((a, b) => a.localeCompare(b))); // Andorra, Österreich, Vietnam (correct!)
