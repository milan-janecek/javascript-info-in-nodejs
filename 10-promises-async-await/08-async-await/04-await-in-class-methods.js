'use strict';

// async/await preserves this

class Person {
  constructor(name) {
    this.name = name;
  }

  async sayHi() {
    console.log(`Hi from ${this.name}`);
  }

  async sayBye() {
    console.log(`Bye from ${this.name}`);
  }

  async meeting() {
    console.log(`${this.name} is about to say Hi`);
    await this.sayHi();
    console.log(`${this.name} is about to say Bye`);
    await this.sayBye();
    console.log(`${this.name} said it all`);
  }
}

(async () => {
  const person = new Person('John');
  await person.meeting();
})();
