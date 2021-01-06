'use strict';

let date = new Date(2013, 0, 32); // 32 Jan 2013 ?!?
console.log(date.toString()); // ...is 1st Feb 2013!

date = new Date(2016, 1, 28);
date.setDate(date.getDate() + 2);

console.log(date.toString()); // 1 Mar 2016


date = new Date();
date.setSeconds(date.getSeconds() + 70);

console.log(date.toString()); // shows the correct date

date = new Date(2016, 0, 2);
date.setDate(1); // set day 1 of month
console.log(date.toString()); //  1 Jan 2016

date.setDate(0); // min day is 1, so the last day of the previous month is assumed
console.log(date.toString()); // 31 Dec 2015
