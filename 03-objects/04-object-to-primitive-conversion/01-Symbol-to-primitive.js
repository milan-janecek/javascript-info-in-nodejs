'use strict';

const user = {
  name: 'John',
  money: 1000,

  [Symbol.toPrimitive](hint) { // 3 possible values passed by Javascript - string, number or default
    console.log(`hint: ${hint}`);
    return hint === 'string' ? `{name: "${this.name}"}` : this.money;
  },
};

// conversions demo:
console.log(`${user}`); // hint: string -> {name: "John"}
console.log(+user); // hint: number -> 1000
console.log(user + 500); // hint: default -> 1500
