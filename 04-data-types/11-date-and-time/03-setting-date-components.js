'use strict';

let date = new Date();
date.setFullYear(2030, 1, 1);
console.log(`date.setFullYear(2030, 1, 1): ${date}`);

date = new Date();
date.setUTCFullYear(2030, 1, 1);
console.log(`date.setUTCFullYear(2030, 1, 1): ${date}`);

date = new Date();
date.setMonth(1, 1);
console.log(`date.setMonth(1, 1): ${date}`);

date = new Date();
date.setUTCMonth(1, 1);
console.log(`date.setUTCMonth(1, 1): ${date}`);


date = new Date();
date.setDate(1);
console.log(`date.setDate(1): ${date}`);

date = new Date();
date.setUTCDate(1);
console.log(`date.setUTCDate(1): ${date}`);

date = new Date();
date.setHours(1, 1, 1, 1);
console.log(`date.setHours(1, 1, 1, 1): ${date}`);

date = new Date();
date.setUTCHours(1, 1, 1, 1);
console.log(`date.setUTCHours(1, 1, 1, 1): ${date}`);

date = new Date();
date.setMinutes(1, 1, 1);
console.log(`date.setMinutes(1, 1, 1): ${date}`);

date = new Date();
date.setUTCMinutes(1, 1, 1);
console.log(`date.setUTCMinutes(1, 1, 1): ${date}`);

date = new Date();
date.setSeconds(1, 1);
console.log(`date.setSeconds(1, 1): ${date}`);

date = new Date();
date.setUTCSeconds(1, 1);
console.log(`date.setUTCSeconds(1, 1): ${date}`);

date = new Date();
date.setMilliseconds(1, 1);
console.log(`date.setMilliseconds(1, 1): ${date}`);

date = new Date();
date.setUTCMilliseconds(1, 1);
console.log(`date.setUTCMilliseconds(1, 1): ${date}`);

date = new Date();
date.setTime(new Date().getTime() + 1000);
console.log(`date.setTime(new Date().getTime() + 1000): ${date}`);

