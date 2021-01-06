'use strict';

// delete the wrong way - object way

let arr = ['I', 'go', 'home'];

delete arr[1]; // remove "go"

console.log(arr[1]); // undefined

// now arr = ["I",  , "home"];
console.log(arr);
console.log(arr.length); // 3

// splice - arr.splice(index[, deleteCount, elem1, ..., elemN])
// It starts from the position index: removes deleteCount elements and then inserts elem1, ..., elemN at their place. Returns the array of removed elements.

arr = ['I', 'study', 'JavaScript'];
// from index 1 remove 1 element
arr.splice(1, 1);
console.log(arr); // ["I", "JavaScript"]

arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// remove 3 first elements and replace them with another
arr.splice(0, 3, "Let's", 'dance');
console.log(arr); // now ["Let's", "dance", "right", "now"]

arr = ['I', 'study', 'JavaScript', 'right', 'now'];
// remove 2 first elements
const removed = arr.splice(0, 2);
console.log(removed); // "I", "study" <-- array of removed elements

arr = ['I', 'study', 'JavaScript'];
// from index 2 => delete 0 => then insert "complex" and "language"
arr.splice(2, 0, 'complex', 'language');
console.log(arr); // "I", "study", "complex", "language", "JavaScript"

arr = [1, 2, 5];
// from index -1 (one step from the end) => delete 0 elements => then insert 3 and 4
arr.splice(-1, 0, 3, 4);
console.log(arr); // 1,2,3,4,5
