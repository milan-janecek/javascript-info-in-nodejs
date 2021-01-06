'use strict';

// The full syntax of JSON.stringify is: JSON.stringify(value[, replacer, space])

// value - A value to encode.
// replacer - Array of properties to encode or a mapping function function(key, value).
// space - Amount of space to use for formatting

const room = {
  number: 23,
};

const meetup = {
  title: 'Conference',
  participants: [{name: 'John'}, {name: 'Alice'}],
  place: room, // meetup references room
};

room.occupiedBy = meetup; // room references meetup

console.log(JSON.stringify(meetup, ['title', 'participants'])); // {"title":"Conference","participants":[{},{}]}

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number'])); // {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}

// same as above but using replacer function
console.log(JSON.stringify(meetup, (key, value) => {
  console.log(`${key}: ${value}`);
  return (key === 'occupiedBy') ? undefined : value;
})); // {"title":"Conference","participants":[{"name":"John"},{"name":"Alice"}],"place":{"number":23}}
