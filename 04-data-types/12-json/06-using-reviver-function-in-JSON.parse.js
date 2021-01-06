'use strict';

const str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let meetup = JSON.parse(str);

console.log(typeof meetup.date); // string !

// console.log(meetup.date.getDate()); // Error! - date is string - not Date

meetup = JSON.parse(str, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});

console.log(meetup.date.getDate()); // 30 - now it works!

let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;

schedule = JSON.parse(schedule, (key, value) => {
  if (key === 'date') return new Date(value);
  return value;
});

console.log(schedule.meetups[1].date.getDate()); // 18 - revier function works for nested objects too
