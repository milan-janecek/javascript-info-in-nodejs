'use strict';

// arrow functions have no this, if this is accessed, it is taken from the outside

let group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach(
      (student) => console.log(`${this.title}: ${student}`)
    );
  },
};

group.showList();

// if we used a “regular” function, there would be an error:

group = {
  title: 'Our Group',
  students: ['John', 'Pete', 'Alice'],

  showList() {
    this.students.forEach(function(student) {
      // Error: Cannot read property 'title' of undefined
      console.log(`${this.title}: ${student}`);
    });
  },
};

group.showList();
