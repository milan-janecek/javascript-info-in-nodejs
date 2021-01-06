'use strict';

// all dates have a built-in toJSON method
console.log(JSON.stringify(new Date(Date.UTC(2016, 0, 1)))); // 2016-01-01T00:00:00.000Z

const room = {
  number: 23,

  // each object can define custom toJSON method which will be called by JSON.stringify
  toJSON() {
    return this.number;
  },
};

const meetup = {
  title: 'Conference',
  room,
};

console.log(JSON.stringify(room)); // 23

console.log(JSON.stringify(meetup)); // {"title":"Conference","room":23}
