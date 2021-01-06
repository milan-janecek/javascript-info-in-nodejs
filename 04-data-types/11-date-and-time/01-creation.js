'use strict';

// !!!!!!!!!!! new Date()

// creating instance with no arguments = gets current time in UTC
const now = new Date();
console.log(now); // shows current date/time


// !!!!!!!!!!! new Date(milliseconds)
// Creates instance with milliseconds since 1.01.1970 UTC+0

// 0 means 01.01.1970 UTC+0
const jan01y1970 = new Date(0);
console.log(jan01y1970);

// now add 24 hours, get 02.01.1970 UTC+0
const jan02y1970 = new Date(24 * 3600 * 1000);
console.log(jan02y1970);

// An integer number representing the number of milliseconds that has passed since the beginning of 1970 is called a timestamp

console.log(`timestamp using date.getTime(): ${now.getTime()}`);

// Dates before 01.01.1970 have negative timestamps
console.log(new Date(-24 * 3600 * 1000)); // 1969-12-31T00:00:00.000Z

// !!!!!!!!!!! new Date(datestring)
// If there is a single argument, and it’s a string, then it is parsed automatically. The algorithm is the same as Date.parse

console.log(new Date('2017-01-26')); // The time is not set, so it's assumed to be midnight GMT

// !!!!!!!!!!! new Date(year, month, date, hours, minutes, seconds, ms)
// Creates the date with the given components in the local time zone. Only the first two arguments are obligatory.

// The year must have 4 digits: 2013 is okay, 98 is not.
// The month count starts with 0 (Jan), up to 11 (Dec).
// The date parameter is actually the day of month, if absent then 1 is assumed.
// If hours/minutes/seconds/ms is absent, they are assumed to be equal 0.

console.log(new Date(2011, 0, 1, 0, 0, 0, 0)); // 1 Jan 2011, 00:00:00
console.log(new Date(2011, 0, 1)); // the same, hours etc are 0 by default
console.log(new Date(2011, 0, 1, 2, 3, 4, 567)); // 2011-01-01T01:03:04.567Z
