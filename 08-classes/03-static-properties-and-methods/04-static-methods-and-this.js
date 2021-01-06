'use strict';

class Person {
  constructor(name) {
    this.name = name;
  }

  static staticMethodWhichUsesThis(message) {
    console.log(`${this.name} says ${message}`);
  }

  static staticMethodWhichDoesNotUseThis(person, message) {
    console.log(`${person.name} says ${message}`);
  }

  instanceMethodWhichUsesThis(message) {
    console.log(`${this.name} says ${message}`);
  }

  instanceMethodWhichCallsStaticMethodWhichUsesThis() {
    Person.staticMethodWhichUsesThis(message);
  }

  instanceMethodWhichCallsStaticMethodWhichUsesThis(message) {
    Person.staticMethodWhichUsesThis(message);
  }

  instanceMethodWhichCallsStaticMethodWhichDoesNotUseThis(message) {
    Person.staticMethodWhichDoesNotUseThis(this, message);
  }

  instanceMethodWhichCallsStaticMethodWhichUsesThisViaThis(message) {
    this.staticMethodWhichUsesThis(message);
  }

  instanceMethodWhichCallsStaticMethodWhichDoesNotUseThisViaThis(message) {
    this.staticMethodWhichDoesNotUseThis(this, message);
  }
}

// first call instance method that uses this directly

new Person('Jacob').instanceMethodWhichUsesThis('How are you?'); // Jacob says How are you?

// first call static methods directly

Person.staticMethodWhichDoesNotUseThis(new Person('Peter'), 'How are you?'); // Peter says How are you?
Person.staticMethodWhichUsesThis('How are you?'); // Person says How are you? - this in static method refers to class and this.name refers to class name

const joe = new Person('Joe');

joe.instanceMethodWhichCallsStaticMethodWhichUsesThis('How are you?'); // Person says How are you? - same as above

joe.instanceMethodWhichCallsStaticMethodWhichDoesNotUseThis('How are you?'); // Joe says How are you? - now instance method passed this refering to the instance to static method - we got expected result

// joe.instanceMethodWhichCallsStaticMethodWhichUsesThisViaThis('How are you?'); // TypeError: this.staticMethodWhichUsesThis is not a function - wrong call to static method via this

// joe.instanceMethodWhichCallsStaticMethodWhichDoesNotUseThisViaThis('How are you?'); // TypeError: this.staticMethodWhichDoesNotUseThis is not a function - wrong call to static method via this

function personSaysMessageViaStatic(person, message, executor) {
  executor(person, message);
}

personSaysMessageViaStatic(new Person('Peter'), 'How are you?', Person.staticMethodWhichDoesNotUseThis); // Peter says How are you?

function personSaysMessageViaInstance(message, executor) {
  executor(message);
}

// personSaysMessageViaInstance('How are you?', new Person('John').instanceMethodWhichUsesThis); // TypeError: Cannot read property 'name' of undefined => classic example of instance function loosing this
